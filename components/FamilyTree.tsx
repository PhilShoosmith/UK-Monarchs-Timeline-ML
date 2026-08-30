import React, { useEffect, useRef, useState, useMemo } from "react";
import * as d3 from "d3";
import { Monarch } from "../types";
import { useTranslation } from 'react-i18next';

interface FamilyTreeProps {
  monarchs: Monarch[];
  onBack: () => void;
}

interface TreeNode {
  id: number;
  parentId: number | null;
  monarch: Monarch;
}

const buildTreeData = (monarchs: Monarch[]): TreeNode[] => {
  const parentMap: Record<number, number | null> = {
    1: null, // William I
    2: 1, // William II
    3: 1, // Henry I
    4: 1, // Stephen
    5: 3, // Henry II
    6: 5, // Richard I
    7: 5, // John
    8: 7, // Henry III
    9: 8, // Edward I
    10: 9, // Edward II
    11: 10, // Edward III
    12: 11, // Richard II
    13: 11, // Henry IV
    14: 13, // Henry V
    15: 14, // Henry VI
    16: 11, // Edward IV
    17: 16, // Edward V
    18: 11, // Richard III
    19: 11, // Henry VII
    20: 19, // Henry VIII
    21: 20, // Edward VI
    22: 20, // Mary I
    23: 20, // Elizabeth I
    24: 19, // James I
    25: 24, // Charles I
    26: 25, // Charles II
    27: 25, // James II
    28: 27, // William III & Mary II
    29: 27, // Anne
    30: 24, // George I
    31: 30, // George II
    32: 31, // George III
    33: 32, // George IV
    34: 32, // William IV
    35: 32, // Victoria
    36: 35, // Edward VII
    37: 36, // George V
    38: 37, // Edward VIII
    39: 37, // George VI
    40: 39, // Elizabeth II
    41: 40, // Charles III
  };

  return monarchs.map((m) => ({
    id: m.id,
    parentId: parentMap[m.id] !== undefined ? parentMap[m.id] : null,
    monarch: m,
  }));
};

const FamilyTree: React.FC<FamilyTreeProps> = ({ monarchs, onBack }) => {
  const { t } = useTranslation();
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredMonarch, setHoveredMonarch] = useState<Monarch | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const treeData = useMemo(() => buildTreeData(monarchs), [monarchs]);

  useEffect(() => {
    if (!svgRef.current || !containerRef.current || treeData.length === 0)
      return;

    const margin = { top: 40, right: 40, bottom: 40, left: 40 };

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    // Create hierarchy
    const stratify = d3
      .stratify<TreeNode>()
      .id((d) => d.id.toString())
      .parentId((d) => (d.parentId ? d.parentId.toString() : null));

    const root = stratify(treeData);

    // Tree layout
    const treeLayout = d3
      .tree<TreeNode>()
      .nodeSize([120, 160])
      .separation((a, b) => (a.parent === b.parent ? 1.2 : 1.5));

    treeLayout(root);

    // Calculate bounds to center the tree
    let x0 = Infinity;
    let x1 = -x0;
    let y0 = Infinity;
    let y1 = -y0;
    root.each((d) => {
      if (d.x > x1) x1 = d.x;
      if (d.x < x0) x0 = d.x;
      if (d.y > y1) y1 = d.y;
      if (d.y < y0) y0 = d.y;
    });

    const g = svg.append("g");

    // Add zoom capabilities
    const zoom = d3
      .zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.1, 3])
      .on("zoom", (event) => {
        g.attr("transform", event.transform);
      });

    svg.call(zoom);

    // Initial zoom to fit and center
    const containerWidth = containerRef.current.clientWidth;
    const containerHeight = containerRef.current.clientHeight;
    const treeWidth = x1 - x0 + 120;
    const treeHeight = y1 - y0 + 160;

    const scale =
      Math.min(
        containerWidth / treeWidth,
        containerHeight / treeHeight,
        1, // don't scale up more than 1x
      ) * 0.9; // 90% of container

    const initialTransform = d3.zoomIdentity
      .translate(
        containerWidth / 2 - ((x0 + x1) / 2) * scale,
        containerHeight / 2 - ((y0 + y1) / 2) * scale,
      )
      .scale(scale);

    svg.call(zoom.transform, initialTransform);

    // House backgrounds
    const houseGroups = d3.group(root.descendants(), (d) => d.data.monarch.house);
    const colors = [
      "#ef4444", "#f97316", "#f59e0b", "#84cc16", "#10b981", 
      "#06b6d4", "#3b82f6", "#6366f1", "#8b5cf6", "#d946ef", "#f43f5e"
    ];
    const colorScale = d3.scaleOrdinal(colors);
    const houseBackgrounds = g.append("g").attr("class", "house-backgrounds");

    houseGroups.forEach((nodes, house) => {
      if (!house) return;

      const paddingX = 80;
      const paddingTop = 60;
      const paddingBottom = 80;

      const minX = d3.min(nodes, (d) => d.x) ?? 0;
      const maxX = d3.max(nodes, (d) => d.x) ?? 0;
      const minY = d3.min(nodes, (d) => d.y) ?? 0;
      const maxY = d3.max(nodes, (d) => d.y) ?? 0;

      const width = maxX - minX + paddingX * 2;
      const height = maxY - minY + paddingTop + paddingBottom;

      const houseGroup = houseBackgrounds.append("g");

      houseGroup
        .append("rect")
        .attr("x", minX - paddingX)
        .attr("y", minY - paddingTop)
        .attr("width", width)
        .attr("height", height)
        .attr("rx", 24)
        .attr("fill", colorScale(house))
        .attr("opacity", 0.15)
        .attr("stroke", colorScale(house))
        .attr("stroke-width", 2)
        .attr("stroke-opacity", 0.4);

      houseGroup
        .append("text")
        .attr("x", minX - paddingX + 20)
        .attr("y", minY - paddingTop + 28)
        .attr("fill", colorScale(house))
        .attr("opacity", 0.9)
        .attr("font-size", "16px")
        .attr("font-weight", "bold")
        .text(t(`House of {{house}}`, { house: t(house) }));
    });

    // Links
    g.selectAll(".link")
      .data(root.links())
      .join("path")
      .attr("class", "link")
      .attr("fill", "none")
      .attr("stroke", "#ffff00") // bright yellow
      .attr("stroke-width", 2)
      .attr(
        "d",
        d3
          .linkVertical<
            d3.HierarchyPointLink<TreeNode>,
            d3.HierarchyPointNode<TreeNode>
          >()
          .x((d) => d.x)
          .y((d) => d.y),
      );

    // Nodes
    const node = g
      .selectAll(".node")
      .data(root.descendants())
      .join("g")
      .attr("class", "node")
      .attr("transform", (d) => `translate(${d.x},${d.y})`)
      .on("mouseenter", (event, d) => {
        setHoveredMonarch(d.data.monarch);
        setTooltipPos({ x: event.clientX, y: event.clientY });
        d3.select(event.currentTarget)
          .select("circle")
          .attr("stroke", "#facc15")
          .attr("stroke-width", 4);
      })
      .on("mousemove", (event) => {
        setTooltipPos({ x: event.clientX, y: event.clientY });
      })
      .on("mouseleave", (event) => {
        setHoveredMonarch(null);
        d3.select(event.currentTarget)
          .select("circle")
          .attr("stroke", "#94a3b8")
          .attr("stroke-width", 2);
      });

    // Node circles (background for images)
    node
      .append("circle")
      .attr("r", 24)
      .attr("fill", "#1e293b") // slate-800
      .attr("stroke", "#94a3b8") // slate-400
      .attr("stroke-width", 2);

    // Clip path for images
    node
      .append("clipPath")
      .attr("id", (d) => `clip-${d.id}`)
      .append("circle")
      .attr("r", 24);

    // Images
    node
      .append("image")
      .attr("href", (d) => d.data.monarch.imageUrl || "")
      .attr("x", -24)
      .attr("y", -24)
      .attr("width", 48)
      .attr("height", 48)
      .attr("clip-path", (d) => `url(#clip-${d.id})`)
      .attr("preserveAspectRatio", "xMidYMid slice");

    // Labels
    node
      .append("text")
      .attr("dy", 36)
      .attr("text-anchor", "middle")
      .attr("fill", "#e2e8f0") // slate-200
      .attr("font-size", "12px")
      .attr("font-weight", "500")
      .text((d) => t(d.data.monarch.name));

    node
      .append("text")
      .attr("dy", 50)
      .attr("text-anchor", "middle")
      .attr("fill", "#94a3b8") // slate-400
      .attr("font-size", "10px")
      .text(
        (d) =>
          `${d.data.monarch.reignStart} - ${d.data.monarch.reignEnd || t("Present")}`,
      );
  }, [treeData, t]);

  return (
    <div className="w-full h-screen flex flex-col bg-slate-900 relative">
      <div className="absolute top-4 left-4 z-10">
        <button
          onClick={onBack}
          className="px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors border border-slate-700 shadow-lg"
        >
          &larr; {t("Back to Menu")}
        </button>
      </div>

      <div className="absolute top-4 right-4 z-10 text-right pointer-events-none">
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-500">
          {t("Royal Lineage")}
        </h2>
        <p className="text-slate-400 text-sm">{t("Scroll to zoom, drag to pan")}</p>
      </div>

      <div
        ref={containerRef}
        className="flex-1 w-full h-full overflow-hidden cursor-grab active:cursor-grabbing"
      >
        <svg ref={svgRef} className="w-full h-full" />
      </div>

      {hoveredMonarch && (
        <div
          className="fixed z-50 bg-slate-800 border border-slate-600 p-4 rounded-xl shadow-2xl max-w-xs pointer-events-none transform -translate-x-1/2 -translate-y-full mt-[-20px]"
          style={{ left: tooltipPos.x, top: tooltipPos.y }}
        >
          <div className="flex items-center gap-3 mb-2">
            {hoveredMonarch.imageUrl && (
              <img
                src={hoveredMonarch.imageUrl}
                alt={hoveredMonarch.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-amber-500"
              />
            )}
            <div>
              <h3 className="font-bold text-white">{t(hoveredMonarch.name)}</h3>
              <p className="text-xs text-amber-400">{t(`House of {{house}}`, { house: t(hoveredMonarch.house) })}</p>
            </div>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            {t(hoveredMonarch.context)}
          </p>
        </div>
      )}
    </div>
  );
};

export default FamilyTree;
