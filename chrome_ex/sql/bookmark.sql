CREATE TABLE `ez_bookmark` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `index` int(10) NOT NULL,
  `parentId` int(10) NOT NULL,
  `title` varchar(2048) NOT NULL,
  `dateAdded` timestamp NULL DEFAULT NULL,
  `dateGroupModified` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


