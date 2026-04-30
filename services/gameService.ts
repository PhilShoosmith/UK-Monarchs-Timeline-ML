
import { Monarch } from '../types';
import { ROUNDS_PER_GAME } from '../constants';

// This file can be updated via the in-game admin panel.
export const allMonarchs: Monarch[] = [
  {
    "id": 1,
    "name": "William I",
    "house": "Normandy",
    "reignStart": 1066,
    "reignEnd": 1087,
    "context": "Known as 'The Conqueror', he led the Norman conquest of England and commissioned the Domesday Book.",
    "title": "King of England",
    "imageUrl": "https://i.ibb.co/m5rbXkgF/william1a1.jpg",
    "coatOfArmsUrl": "https://i.ibb.co/1t9Sv91L/Arms-of-William-the-Conqueror-1066-1087-svg.png"
  },
  {
    "id": 2,
    "name": "William II",
    "house": "Normandy",
    "reignStart": 1087,
    "reignEnd": 1100,
    "context": "Known as 'Rufus' due to his red complexion, his reign was marked by his quarrelsome nature and conflicts with the Church.",
    "title": "King of England",
    "imageUrl": "https://i.ibb.co/JRjG24XN/william-II-l.jpg",
    "coatOfArmsUrl": "https://i.ibb.co/1t9Sv91L/Arms-of-William-the-Conqueror-1066-1087-svg.png"
  },
  {
    "id": 3,
    "name": "Henry I",
    "house": "Normandy",
    "reignStart": 1100,
    "reignEnd": 1135,
    "context": "A skilled administrator who reformed England's legal and financial systems. His only legitimate son's death led to a succession crisis.",
    "title": "King of England",
    "imageUrl": "https://i.ibb.co/Lh9X2DS4/henry1a2.jpg",
    "coatOfArmsUrl": "https://i.ibb.co/1t9Sv91L/Arms-of-William-the-Conqueror-1066-1087-svg.png"
  },
  {
    "id": 4,
    "name": "Stephen",
    "house": "Blois",
    "reignStart": 1135,
    "reignEnd": 1154,
    "context": "His reign was dominated by 'The Anarchy', a civil war with his cousin Empress Matilda over the throne.",
    "title": "King of England",
    "imageUrl": "https://i.ibb.co/0pmthk1P/stephen1a1.jpg",
    "coatOfArmsUrl": "https://i.ibb.co/1t9Sv91L/Arms-of-William-the-Conqueror-1066-1087-svg.png"
  },
  {
    "id": 5,
    "name": "Henry II",
    "house": "Plantagenet",
    "reignStart": 1154,
    "reignEnd": 1189,
    "context": "His reign saw major legal reforms, the establishment of the Angevin Empire, and conflict with Thomas Becket.",
    "title": "King of England",
    "imageUrl": "https://i.ibb.co/Mxpy75bh/henry2a1.jpg",
    "coatOfArmsUrl": "https://i.ibb.co/1t9Sv91L/Arms-of-William-the-Conqueror-1066-1087-svg.png"
  },
  {
    "id": 6,
    "name": "Richard I",
    "house": "Plantagenet",
    "reignStart": 1189,
    "reignEnd": 1199,
    "context": "Known as 'The Lionheart' for his military prowess, he spent most of his reign on the Third Crusade.",
    "title": "King of England",
    "imageUrl": "https://i.ibb.co/yF30WKfW/King-Richard1-crus1.jpg",
    "coatOfArmsUrl": "https://i.ibb.co/3Y9DJdZ1/Royal-arms-of-England-svg.webp"
  },
  {
    "id": 7,
    "name": "John",
    "house": "Plantagenet",
    "reignStart": 1199,
    "reignEnd": 1216,
    "context": "Forced by his barons to sign the Magna Carta in 1215, a landmark document in constitutional history.",
    "title": "King of England",
    "imageUrl": "https://i.ibb.co/Vcq7XrM2/johna1.jpg",
    "coatOfArmsUrl": "https://i.ibb.co/3Y9DJdZ1/Royal-arms-of-England-svg.webp"
  },
  {
    "id": 8,
    "name": "Henry III",
    "house": "Plantagenet",
    "reignStart": 1216,
    "reignEnd": 1272,
    "context": "His long reign was marked by the Second Barons' War and the development of Parliament. He rebuilt Westminster Abbey.",
    "title": "King of England",
    "imageUrl": "https://i.ibb.co/84g7cqns/King-Henry3c-l.jpg",
    "coatOfArmsUrl": "https://i.ibb.co/3Y9DJdZ1/Royal-arms-of-England-svg.webp"
  },
  {
    "id": 9,
    "name": "Edward I",
    "house": "Plantagenet",
    "reignStart": 1272,
    "reignEnd": 1307,
    "context": "Known as 'Longshanks', he conquered Wales, built many iconic castles, and fought wars with Scotland.",
    "title": "King of England",
    "imageUrl": "https://i.ibb.co/4RhBhQxn/edward1a1.jpg",
    "coatOfArmsUrl": "https://i.ibb.co/3Y9DJdZ1/Royal-arms-of-England-svg.webp"
  },
  {
    "id": 10,
    "name": "Edward II",
    "house": "Plantagenet",
    "reignStart": 1307,
    "reignEnd": 1327,
    "context": "His reign was troubled by famine, defeat by the Scots at Bannockburn, and conflict with his barons, leading to his deposition.",
    "title": "King of England",
    "imageUrl": "https://i.ibb.co/spJ0npyH/edward2a1.jpg",
    "coatOfArmsUrl": "https://i.ibb.co/3Y9DJdZ1/Royal-arms-of-England-svg.webp"
  },
  {
    "id": 11,
    "name": "Edward III",
    "house": "Plantagenet",
    "reignStart": 1327,
    "reignEnd": 1377,
    "context": "His fifty-year reign saw the beginning of the Hundred Years' War and the outbreak of the Black Death.",
    "title": "King of England",
    "imageUrl": "https://i.ibb.co/zTVDTLgd/edward3a1.jpg",
    "coatOfArmsUrl": "https://i.ibb.co/3Y9DJdZ1/Royal-arms-of-England-svg.webp"
  },
  {
    "id": 12,
    "name": "Richard II",
    "house": "Plantagenet",
    "reignStart": 1377,
    "reignEnd": 1399,
    "context": "Faced the Peasants' Revolt in 1381. His tyrannical rule led to his overthrow by his cousin, Henry Bolingbroke.",
    "title": "King of England",
    "imageUrl": "https://i.ibb.co/Gf43H57t/King-Richard2d.jpg",
    "coatOfArmsUrl": "https://i.ibb.co/jvFPjLt8/Royal-Arms-of-England-1399-1603-svg.png"
  },
  {
    "id": 13,
    "name": "Henry IV",
    "house": "Lancaster",
    "reignStart": 1399,
    "reignEnd": 1413,
    "context": "The first Lancastrian king, he spent much of his reign defending his throne from rebellions.",
    "title": "King of England",
    "imageUrl": "https://i.ibb.co/0pQ7nYMb/henry4a.jpg",
    "coatOfArmsUrl": "https://i.ibb.co/jvFPjLt8/Royal-Arms-of-England-1399-1603-svg.png"
  },
  {
    "id": 14,
    "name": "Henry V",
    "house": "Lancaster",
    "reignStart": 1413,
    "reignEnd": 1422,
    "context": "Famed for his victory at the Battle of Agincourt during the Hundred Years' War.",
    "title": "King of England",
    "imageUrl": "https://i.ibb.co/4g06ncC2/henry5a.jpg",
    "coatOfArmsUrl": "https://i.ibb.co/jvFPjLt8/Royal-Arms-of-England-1399-1603-svg.png"
  },
  {
    "id": 15,
    "name": "Henry VI",
    "house": "Lancaster",
    "reignStart": 1422,
    "reignEnd": 1461,
    "context": "His weak rule and mental instability were major factors in the outbreak of the Wars of the Roses.",
    "title": "King of England",
    "imageUrl": "https://i.ibb.co/B5X5jbVK/henry6a1.jpg",
    "coatOfArmsUrl": "https://i.ibb.co/jvFPjLt8/Royal-Arms-of-England-1399-1603-svg.png"
  },
  {
    "id": 16,
    "name": "Edward IV",
    "house": "York",
    "reignStart": 1461,
    "reignEnd": 1483,
    "context": "A key figure in the Wars of the Roses, he seized the throne from Henry VI, though his reign was briefly interrupted.",
    "title": "King of England",
    "imageUrl": "https://i.ibb.co/CpQXFPjw/edward4a.jpg",
    "coatOfArmsUrl": "https://i.ibb.co/jvFPjLt8/Royal-Arms-of-England-1399-1603-svg.png"
  },
  {
    "id": 17,
    "name": "Edward V",
    "house": "York",
    "reignStart": 1483,
    "reignEnd": 1483,
    "context": "One of the 'Princes in the Tower', he was deposed after a reign of only two months and likely murdered.",
    "title": "King of England",
    "imageUrl": "https://i.ibb.co/q3T1WcpM/edward5a1.jpg",
    "coatOfArmsUrl": "https://i.ibb.co/jvFPjLt8/Royal-Arms-of-England-1399-1603-svg.png"
  },
  {
    "id": 18,
    "name": "Richard III",
    "house": "York",
    "reignStart": 1483,
    "reignEnd": 1485,
    "context": "The last Plantagenet king, his death at the Battle of Bosworth Field ended the Wars of the Roses.",
    "title": "King of England",
    "imageUrl": "https://i.ibb.co/zT02Dd1v/richard3a.jpg",
    "coatOfArmsUrl": "https://i.ibb.co/jvFPjLt8/Royal-Arms-of-England-1399-1603-svg.png"
  },
  {
    "id": 19,
    "name": "Henry VII",
    "house": "Tudor",
    "reignStart": 1485,
    "reignEnd": 1509,
    "context": "Won the throne at Bosworth Field, ending the Wars of the Roses and founding the Tudor dynasty.",
    "title": "King of England",
    "imageUrl": "https://i.ibb.co/HfWM7xYW/King-Henry7-s.jpg",
    "coatOfArmsUrl": "https://i.ibb.co/jvFPjLt8/Royal-Arms-of-England-1399-1603-svg.png"
  },
  {
    "id": 20,
    "name": "Henry VIII",
    "house": "Tudor",
    "reignStart": 1509,
    "reignEnd": 1547,
    "context": "Famous for his six marriages and for initiating the English Reformation, separating the Church of England from papal authority.",
    "title": "King of England",
    "imageUrl": "https://i.ibb.co/RGFQvdDM/King-Henry8-sa.jpg",
    "coatOfArmsUrl": "https://i.ibb.co/jvFPjLt8/Royal-Arms-of-England-1399-1603-svg.png"
  },
  {
    "id": 21,
    "name": "Edward VI",
    "house": "Tudor",
    "reignStart": 1547,
    "reignEnd": 1553,
    "context": "Became king at age nine. His reign saw the establishment of Protestantism in England.",
    "title": "King of England",
    "imageUrl": "https://i.ibb.co/21kj7TxG/edward6a.jpg",
    "coatOfArmsUrl": "https://i.ibb.co/jvFPjLt8/Royal-Arms-of-England-1399-1603-svg.png"
  },
  {
    "id": 22,
    "name": "Mary I",
    "house": "Tudor",
    "reignStart": 1553,
    "reignEnd": 1558,
    "context": "Attempted to reverse the Reformation and restore Catholicism, earning the nickname 'Bloody Mary' for persecuting Protestants.",
    "title": "Queen of England",
    "imageUrl": "https://i.ibb.co/v6F8LY2p/Queen-Mary1-s.jpg",
    "coatOfArmsUrl": "https://i.ibb.co/h04Q1pw/Royal-Arms-of-England-1554-1558-svg.png"
  },
  {
    "id": 23,
    "name": "Elizabeth I",
    "house": "Tudor",
    "reignStart": 1558,
    "reignEnd": 1603,
    "context": "The 'Virgin Queen', her long reign is known as the Elizabethan era, a time of great cultural and naval achievement.",
    "title": "Queen of England",
    "imageUrl": "https://i.ibb.co/jkkXLRrN/Queen-Eliz1-fan1a.jpg",
    "coatOfArmsUrl": "https://i.ibb.co/KjCTDQZS/Royal-Arms-of-England-1603-1707-svg.png"
  },
  {
    "id": 24,
    "name": "James I",
    "house": "Stuart",
    "reignStart": 1603,
    "reignEnd": 1625,
    "context": "As James VI of Scotland, he united the Scottish and English crowns, becoming the first monarch of Great Britain.",
    "title": "King of England and Scotland",
    "imageUrl": "https://i.ibb.co/7JyH8nGX/james1a.jpg",
    "coatOfArmsUrl": "https://i.ibb.co/KjCTDQZS/Royal-Arms-of-England-1603-1707-svg.png"
  },
  {
    "id": 25,
    "name": "Charles I",
    "house": "Stuart",
    "reignStart": 1625,
    "reignEnd": 1649,
    "context": "His conflicts with Parliament led to the English Civil War, culminating in his trial and execution.",
    "title": "King of England, Scotland, and Ireland",
    "imageUrl": "https://i.ibb.co/wrQg99Dm/King-Charles1-s.jpg",
    "coatOfArmsUrl": "https://i.ibb.co/KjCTDQZS/Royal-Arms-of-England-1603-1707-svg.png"
  },
  {
    "id": 26,
    "name": "Charles II",
    "house": "Stuart",
    "reignStart": 1660,
    "reignEnd": 1685,
    "context": "Restored to the throne after the Interregnum, his reign is known as the Restoration period, a time of cultural revival.",
    "title": "King of England, Scotland, and Ireland",
    "imageUrl": "https://i.ibb.co/WN1VxnGj/King-Charles2b.jpg",
    "coatOfArmsUrl": "https://i.ibb.co/KjCTDQZS/Royal-Arms-of-England-1603-1707-svg.png"
  },
  {
    "id": 27,
    "name": "James II",
    "house": "Stuart",
    "reignStart": 1685,
    "reignEnd": 1688,
    "context": "His pro-Catholic policies led to the Glorious Revolution, where he was deposed without bloodshed.",
    "title": "King of England, Scotland, and Ireland",
    "imageUrl": "https://i.ibb.co/VdTx5XS/King-James2-s.jpg",
    "coatOfArmsUrl": "https://i.ibb.co/KjCTDQZS/Royal-Arms-of-England-1603-1707-svg.png"
  },
  {
    "id": 28,
    "name": "William III & Mary II",
    "house": "Stuart",
    "reignStart": 1689,
    "reignEnd": 1702,
    "context": "Ruled jointly after the Glorious Revolution, signing the Bill of Rights which limited the power of the monarchy.",
    "title": "King & Queen of England, Scotland, and Ireland",
    "imageUrl": "https://i.ibb.co/DfLfPySb/william3a.jpg",
    "coatOfArmsUrl": "https://i.ibb.co/84XhNzYP/Royal-Arms-of-England-1694-1702-svg.png"
  },
  {
    "id": 29,
    "name": "Anne",
    "house": "Stuart",
    "reignStart": 1702,
    "reignEnd": 1714,
    "context": "The first monarch of a united Great Britain, her reign saw the Acts of Union in 1707.",
    "title": "Queen of Great Britain and Ireland",
    "imageUrl": "https://i.ibb.co/XGxhSZp/Queen-Anne-s.jpg",
    "coatOfArmsUrl": "https://i.ibb.co/gbFrj2gM/Royal-Arms-of-Great-Britain-1714-1801-svg.png"
  },
  {
    "id": 30,
    "name": "George I",
    "house": "Hanover",
    "reignStart": 1714,
    "reignEnd": 1727,
    "context": "The first Hanoverian king, he ascended the throne due to the Act of Settlement, speaking little English.",
    "title": "King of Great Britain and Ireland",
    "imageUrl": "https://i.ibb.co/zhbhJV6k/King-George1-s.jpg",
    "coatOfArmsUrl": "https://i.ibb.co/gbFrj2gM/Royal-Arms-of-Great-Britain-1714-1801-svg.png"
  },
  {
    "id": 31,
    "name": "George II",
    "house": "Hanover",
    "reignStart": 1727,
    "reignEnd": 1760,
    "context": "The last British monarch born outside Great Britain, he was the last to lead an army into battle (at Dettingen).",
    "title": "King of Great Britain and Ireland",
    "imageUrl": "https://i.ibb.co/mrHsn5hN/King-George2-s.jpg",
    "coatOfArmsUrl": "https://i.ibb.co/RGR656sq/Coat-of-arms-of-the-United-Kingdom-2022-variant-2-svg.webp"
  },
  {
    "id": 32,
    "name": "George III",
    "house": "Hanover",
    "reignStart": 1760,
    "reignEnd": 1820,
    "context": "His long reign saw the American Revolutionary War and the Napoleonic Wars. Later suffered from mental illness.",
    "title": "King of the United Kingdom",
    "imageUrl": "https://i.ibb.co/HpPJ4kMh/King-George3a.jpg",
    "coatOfArmsUrl": "https://i.ibb.co/RGR656sq/Coat-of-arms-of-the-United-Kingdom-2022-variant-2-svg.webp"
  },
  {
    "id": 33,
    "name": "George IV",
    "house": "Hanover",
    "reignStart": 1820,
    "reignEnd": 1830,
    "context": "Served as Prince Regent during his father's illness. Known for his extravagant lifestyle and patronage of the arts.",
    "title": "King of the United Kingdom",
    "imageUrl": "https://i.ibb.co/MytXGRh5/King-George4-sa.jpg",
    "coatOfArmsUrl": "https://i.ibb.co/RGR656sq/Coat-of-arms-of-the-United-Kingdom-2022-variant-2-svg.webp"
  },
  {
    "id": 34,
    "name": "William IV",
    "house": "Hanover",
    "reignStart": 1830,
    "reignEnd": 1837,
    "context": "Known as the 'Sailor King', his reign saw the passage of the Great Reform Act of 1832.",
    "title": "King of the United Kingdom",
    "imageUrl": "https://i.ibb.co/ynqjbKfy/King-William4a-s.jpg",
    "coatOfArmsUrl": "https://i.ibb.co/RGR656sq/Coat-of-arms-of-the-United-Kingdom-2022-variant-2-svg.webp"
  },
  {
    "id": 35,
    "name": "Victoria",
    "house": "Hanover",
    "reignStart": 1837,
    "reignEnd": 1901,
    "context": "Her reign of 63 years, the Victorian era, was a period of industrial, cultural, political, and scientific change.",
    "title": "Queen of the United Kingdom",
    "imageUrl": "https://i.ibb.co/BkT77qP/Queen-Victoria-s.jpg",
    "coatOfArmsUrl": "https://i.ibb.co/RGR656sq/Coat-of-arms-of-the-United-Kingdom-2022-variant-2-svg.webp"
  },
  {
    "id": 36,
    "name": "Edward VII",
    "house": "Saxe-Coburg and Gotha",
    "reignStart": 1901,
    "reignEnd": 1910,
    "context": "After a long wait as Prince of Wales, his short reign is known as the Edwardian era.",
    "title": "King of the United Kingdom",
    "imageUrl": "https://i.ibb.co/wZddR4kf/King-Edward7a.jpg",
    "coatOfArmsUrl": "https://i.ibb.co/RGR656sq/Coat-of-arms-of-the-United-Kingdom-2022-variant-2-svg.webp"
  },
  {
    "id": 37,
    "name": "George V",
    "house": "Windsor",
    "reignStart": 1910,
    "reignEnd": 1936,
    "context": "He changed the house name from Saxe-Coburg and Gotha to Windsor during World War I.",
    "title": "King of the United Kingdom",
    "imageUrl": "https://i.ibb.co/4g4DPx04/King-George5-s.jpg",
    "coatOfArmsUrl": "https://i.ibb.co/RGR656sq/Coat-of-arms-of-the-United-Kingdom-2022-variant-2-svg.webp"
  },
  {
    "id": 38,
    "name": "Edward VIII",
    "house": "Windsor",
    "reignStart": 1936,
    "reignEnd": 1936,
    "context": "His reign lasted less than a year, as he abdicated to marry Wallis Simpson, a twice-divorced American.",
    "title": "King of the United Kingdom",
    "imageUrl": "https://i.ibb.co/PZNtbNXJ/King-Edward8d.jpg",
    "coatOfArmsUrl": "https://i.ibb.co/RGR656sq/Coat-of-arms-of-the-United-Kingdom-2022-variant-2-svg.webp"
  },
  {
    "id": 39,
    "name": "George VI",
    "house": "Windsor",
    "reignStart": 1936,
    "reignEnd": 1952,
    "context": "He became king unexpectedly after his brother's abdication and led Britain through World War II.",
    "title": "King of the United Kingdom",
    "imageUrl": "https://i.ibb.co/22pB0gp/King-George6-sa.jpg",
    "coatOfArmsUrl": "https://i.ibb.co/RGR656sq/Coat-of-arms-of-the-United-Kingdom-2022-variant-2-svg.webp"
  },
  {
    "id": 40,
    "name": "Elizabeth II",
    "house": "Windsor",
    "reignStart": 1952,
    "reignEnd": 2022,
    "context": "The longest-reigning British monarch, her reign spanned seven decades of immense social change.",
    "title": "Queen of the United Kingdom",
    "imageUrl": "https://i.ibb.co/WbJzHvm/Queen-Eliz2a.jpg",
    "coatOfArmsUrl": "https://i.ibb.co/RGR656sq/Coat-of-arms-of-the-United-Kingdom-2022-variant-2-svg.webp"
  },
  {
    "id": 41,
    "name": "Charles III",
    "house": "Windsor",
    "reignStart": 2022,
    "reignEnd": null,
    "context": "Ascended to the throne in 2022, having been the longest-serving heir apparent in British history.",
    "title": "King of the United Kingdom",
    "imageUrl": "https://i.ibb.co/rGGZBzfN/King-Charles-III.jpg",
    "coatOfArmsUrl": "https://i.ibb.co/RGR656sq/Coat-of-arms-of-the-United-Kingdom-2022-variant-2-svg.webp"
  }
];

export const getGameMonarchs = (sourceMonarchs: Monarch[]): Monarch[] => {
  const shuffled = [...sourceMonarchs].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, ROUNDS_PER_GAME);
};

export const getSuccessorGameMonarchs = (sourceMonarchs: Monarch[]): Monarch[] => {
  // Exclude the last monarch as they have no successor in the list
  const eligibleMonarchs = sourceMonarchs.slice(0, -1);
  const shuffled = [...eligibleMonarchs].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, ROUNDS_PER_GAME);
};
