-- v002_history_data_export.sql
-- Generated: 2025-10-06T09:02:23.858Z
-- Includes: church_divisions, bible_manuscripts, bible_translations

BEGIN;

-- Church Divisions
DELETE FROM church_divisions;
INSERT INTO church_divisions (
  id, name, description, year, cause, outcome, "parentId", "imageUrl", "createdAt", "updatedAt"
) VALUES (
  'cmgau84sr00028zrxai0dtwxk',
  'Eastern Orthodox Church',
  'The communion of autocephalous Christian churches that follow the Byzantine Rite and recognize the Patriarch of Constantinople as their spiritual leader.',
  1054,
  'Rejection of papal supremacy and Western theological developments.',
  'Maintained traditional Byzantine theology and practices.',
  'cmgau84sj00008zrxs9zn6n36',
  NULL,
  '2025-10-03T12:45:57.195Z',
  '2025-10-03T12:45:57.195Z'
);
INSERT INTO church_divisions (
  id, name, description, year, cause, outcome, "parentId", "imageUrl", "createdAt", "updatedAt"
) VALUES (
  'cmgau84sj00008zrxs9zn6n36',
  'Great Schism (1054)',
  'The permanent split between the Eastern Orthodox Church and the Roman Catholic Church, marking the end of the united Christian Church.',
  1054,
  'Disputes over papal authority, the Filioque clause, and cultural differences between East and West.',
  'Formal separation between Eastern Orthodoxy and Roman Catholicism that continues to this day.',
  NULL,
  NULL,
  '2025-10-03T12:45:57.188Z',
  '2025-10-03T12:45:57.188Z'
);
INSERT INTO church_divisions (
  id, name, description, year, cause, outcome, "parentId", "imageUrl", "createdAt", "updatedAt"
) VALUES (
  'cmgau84su00048zrx7eb988i0',
  'Roman Catholic Church',
  'The largest Christian denomination, led by the Pope in Rome, maintaining the Western theological tradition.',
  1054,
  'Insistence on papal supremacy and Western theological formulations.',
  'Continued development of Western theology and papal authority.',
  'cmgau84sj00008zrxs9zn6n36',
  NULL,
  '2025-10-03T12:45:57.199Z',
  '2025-10-03T12:45:57.199Z'
);
INSERT INTO church_divisions (
  id, name, description, year, cause, outcome, "parentId", "imageUrl", "createdAt", "updatedAt"
) VALUES (
  'cmgau84t500078zrxrm02m0kp',
  'Lutheranism',
  'Founded by Martin Luther, emphasizing justification by faith alone and the authority of Scripture.',
  1517,
  'Luther''s 95 Theses and rejection of papal authority.',
  'Established as a separate Christian tradition in Germany and Scandinavia.',
  'cmgau84sz00058zrxlfz4jluq',
  NULL,
  '2025-10-03T12:45:57.209Z',
  '2025-10-03T12:45:57.209Z'
);
INSERT INTO church_divisions (
  id, name, description, year, cause, outcome, "parentId", "imageUrl", "createdAt", "updatedAt"
) VALUES (
  'cmgau84sz00058zrxlfz4jluq',
  'Protestant Reformation (1517)',
  'The 16th-century religious movement that led to the creation of Protestant churches, challenging the authority of the Roman Catholic Church.',
  1517,
  'Corruption in the Church, sale of indulgences, and theological disputes over salvation and authority.',
  'Creation of multiple Protestant denominations and the Counter-Reformation in the Catholic Church.',
  NULL,
  NULL,
  '2025-10-03T12:45:57.204Z',
  '2025-10-03T12:45:57.204Z'
);
INSERT INTO church_divisions (
  id, name, description, year, cause, outcome, "parentId", "imageUrl", "createdAt", "updatedAt"
) VALUES (
  'cmgau84tf000d8zrx6qwb80oj',
  'Anabaptism',
  'Radical Reformation movement emphasizing adult baptism and separation of church and state.',
  1525,
  'Rejection of infant baptism and state-church connections.',
  'Influenced modern Baptist, Mennonite, and Amish traditions.',
  'cmgau84sz00058zrxlfz4jluq',
  NULL,
  '2025-10-03T12:45:57.219Z',
  '2025-10-03T12:45:57.219Z'
);
INSERT INTO church_divisions (
  id, name, description, year, cause, outcome, "parentId", "imageUrl", "createdAt", "updatedAt"
) VALUES (
  'cmgau84ta000b8zrx3sorf6wj',
  'Anglicanism',
  'The Church of England, established by Henry VIII, combining Catholic liturgy with Protestant theology.',
  1534,
  'Henry VIII''s break with Rome over his divorce from Catherine of Aragon.',
  'Created a unique Anglican tradition that spread throughout the British Empire.',
  'cmgau84sz00058zrxlfz4jluq',
  NULL,
  '2025-10-03T12:45:57.215Z',
  '2025-10-03T12:45:57.215Z'
);
INSERT INTO church_divisions (
  id, name, description, year, cause, outcome, "parentId", "imageUrl", "createdAt", "updatedAt"
) VALUES (
  'cmgau84t800098zrxy5g6j24x',
  'Calvinism',
  'Founded by John Calvin, emphasizing predestination and the sovereignty of God.',
  1536,
  'Reformation in Geneva and theological development of Reformed theology.',
  'Spread throughout Europe and influenced Presbyterian and Reformed churches.',
  'cmgau84sz00058zrxlfz4jluq',
  NULL,
  '2025-10-03T12:45:57.212Z',
  '2025-10-03T12:45:57.212Z'
);
INSERT INTO church_divisions (
  id, name, description, year, cause, outcome, "parentId", "imageUrl", "createdAt", "updatedAt"
) VALUES (
  'cmgau84tt000g8zrxunurpwlm',
  'Puritan Movement',
  'English Protestants who sought to purify the Church of England from Catholic practices.',
  1560,
  'Desire for further reformation of the Anglican Church.',
  'Influenced the development of Congregationalist and Presbyterian churches.',
  'cmgau84to000e8zrxojp0iw53',
  NULL,
  '2025-10-03T12:45:57.233Z',
  '2025-10-03T12:45:57.233Z'
);
INSERT INTO church_divisions (
  id, name, description, year, cause, outcome, "parentId", "imageUrl", "createdAt", "updatedAt"
) VALUES (
  'cmgau84to000e8zrxojp0iw53',
  'English Civil War and Puritanism (1640s)',
  'Religious and political conflicts in England that led to the temporary overthrow of the monarchy and the rise of Puritan influence.',
  1642,
  'Conflicts between Anglicans and Puritans over church governance and theology.',
  'Temporary establishment of a Puritan Commonwealth and lasting influence on English Protestantism.',
  NULL,
  NULL,
  '2025-10-03T12:45:57.228Z',
  '2025-10-03T12:45:57.228Z'
);
INSERT INTO church_divisions (
  id, name, description, year, cause, outcome, "parentId", "imageUrl", "createdAt", "updatedAt"
) VALUES (
  'cmgau84tx000i8zrxw32zis7y',
  'Quakerism',
  'Founded by George Fox, emphasizing direct experience of God and pacifism.',
  1652,
  'Rejection of formal church structures and emphasis on inner light.',
  'Established the Religious Society of Friends (Quakers).',
  'cmgau84to000e8zrxojp0iw53',
  NULL,
  '2025-10-03T12:45:57.237Z',
  '2025-10-03T12:45:57.237Z'
);
INSERT INTO church_divisions (
  id, name, description, year, cause, outcome, "parentId", "imageUrl", "createdAt", "updatedAt"
) VALUES (
  'cmgau84ur000q8zrxwdlczj44',
  'Evangelical Movement',
  'A broad movement emphasizing personal conversion, biblical authority, and evangelism.',
  1734,
  'Revival preaching and emphasis on personal religious experience.',
  'Shaped modern evangelical Christianity and influenced multiple denominations.',
  'cmgau84ul000o8zrx3nq5bjbt',
  NULL,
  '2025-10-03T12:45:57.267Z',
  '2025-10-03T12:45:57.267Z'
);
INSERT INTO church_divisions (
  id, name, description, year, cause, outcome, "parentId", "imageUrl", "createdAt", "updatedAt"
) VALUES (
  'cmgau84ul000o8zrx3nq5bjbt',
  'Great Awakening (1730s-1740s)',
  'A series of religious revivals in the American colonies that emphasized personal conversion and emotional religious experience.',
  1734,
  'Concern over declining religious fervor and the influence of Enlightenment rationalism.',
  'Revitalized American Protestantism and influenced the development of evangelical Christianity.',
  NULL,
  NULL,
  '2025-10-03T12:45:57.262Z',
  '2025-10-03T12:45:57.262Z'
);
INSERT INTO church_divisions (
  id, name, description, year, cause, outcome, "parentId", "imageUrl", "createdAt", "updatedAt"
) VALUES (
  'cmgau84u4000j8zrxmgr0f149',
  'Methodist Movement (1730s)',
  'A revival movement within Anglicanism that eventually became a separate denomination, emphasizing personal holiness and social justice.',
  1738,
  'John Wesley''s conversion experience and desire for spiritual renewal within the Church of England.',
  'Formation of the Methodist Church and influence on evangelical Christianity.',
  NULL,
  NULL,
  '2025-10-03T12:45:57.244Z',
  '2025-10-03T12:45:57.244Z'
);
INSERT INTO church_divisions (
  id, name, description, year, cause, outcome, "parentId", "imageUrl", "createdAt", "updatedAt"
) VALUES (
  'cmgau84uv000s8zrx6om6zm75',
  'Baptist Expansion',
  'Rapid growth of Baptist churches during the Great Awakening, emphasizing believer''s baptism and congregational autonomy.',
  1740,
  'Revival preaching and emphasis on personal conversion.',
  'Baptists became one of the largest Protestant groups in America.',
  'cmgau84ul000o8zrx3nq5bjbt',
  NULL,
  '2025-10-03T12:45:57.271Z',
  '2025-10-03T12:45:57.271Z'
);
INSERT INTO church_divisions (
  id, name, description, year, cause, outcome, "parentId", "imageUrl", "createdAt", "updatedAt"
) VALUES (
  'cmgau84u8000l8zrxkbfavgr8',
  'Wesleyan Methodism',
  'The main branch of Methodism following John Wesley''s teachings on sanctification and social holiness.',
  1784,
  'Formal separation from Anglicanism in America.',
  'Became one of the largest Protestant denominations in America.',
  'cmgau84u4000j8zrxmgr0f149',
  NULL,
  '2025-10-03T12:45:57.248Z',
  '2025-10-03T12:45:57.248Z'
);
INSERT INTO church_divisions (
  id, name, description, year, cause, outcome, "parentId", "imageUrl", "createdAt", "updatedAt"
) VALUES (
  'cmgau84uc000n8zrxlbqshtun',
  'Primitive Methodism',
  'A more radical branch of Methodism emphasizing lay preaching and social reform.',
  1811,
  'Desire for more democratic church governance and social activism.',
  'Influenced the development of the Salvation Army and other social reform movements.',
  'cmgau84u4000j8zrxmgr0f149',
  NULL,
  '2025-10-03T12:45:57.252Z',
  '2025-10-03T12:45:57.252Z'
);

-- Bible Manuscripts
DELETE FROM bible_manuscripts;

-- Bible Translations
DELETE FROM bible_translations;

COMMIT;
