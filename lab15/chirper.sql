-- MySQL dump 10.13  Distrib 5.7.18, for macos10.12 (x86_64)
--
-- Host: localhost    Database: Chirper
-- ------------------------------------------------------
-- Server version	5.7.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Chirps`
--

DROP TABLE IF EXISTS `Chirps`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Chirps` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `message` varchar(140) NOT NULL,
  `user` varchar(20) NOT NULL,
  `timestamp` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Chirps`
--

LOCK TABLES `Chirps` WRITE;
/*!40000 ALTER TABLE `Chirps` DISABLE KEYS */;
INSERT INTO `Chirps` VALUES (1,'THIS IS THE FIRST CHIRP','Kool Moe D','9999-12-31 23:59:59'),(2,'This is the second chirp','David Bowie','9999-12-31 23:59:59'),(4,'This is the fourth chirp, looking like #3','Captain Beefhart','9999-12-31 23:59:59'),(5,'This is another chirp.','Playboy Carti','9999-12-31 23:59:59'),(6,'This is the second chirp','David Bowie','9999-12-31 23:59:59'),(8,'This is the fourth chirp, looking like #3','Captain Beefhart','9999-12-31 23:59:59'),(9,'This is another chirp.','Playboy Carti','9999-12-31 23:59:59'),(10,'This is the second chirp','David Bowie','9999-12-31 23:59:59'),(12,'This is the fourth chirp, looking like #3','Captain Beefhart','9999-12-31 23:59:59'),(13,'This is another chirp.','Playboy Carti','9999-12-31 23:59:59');
/*!40000 ALTER TABLE `Chirps` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-06-20 15:45:12
