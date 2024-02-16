-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jan 31, 2024 at 05:11 AM
-- Server version: 8.0.27
-- PHP Version: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `doctor_api`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
CREATE TABLE IF NOT EXISTS `admin` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(32) DEFAULT NULL,
  `password` varchar(1024) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `email`, `password`) VALUES
(1, 'iamparam102@gmail.com', '$2y$10$v1UNdKFrgbbTc07USh0Z5uijwInEtqpMrksSAirUE4NH81PUrqW0u');

-- --------------------------------------------------------

--
-- Table structure for table `appointment`
--

DROP TABLE IF EXISTS `appointment`;
CREATE TABLE IF NOT EXISTS `appointment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `doctorid` int DEFAULT NULL,
  `register_user_id` int DEFAULT NULL,
  `serviceid` int DEFAULT NULL,
  `appointmentdate` date DEFAULT NULL,
  `servicedate` date DEFAULT NULL,
  `servicetime` time DEFAULT NULL,
  `remarks` varchar(255) DEFAULT NULL,
  `status` int DEFAULT '4' COMMENT '0=booked,1=serviced,2=aborted 4 = pending\r\n',
  `rating` int DEFAULT NULL,
  `isdeleted` int NOT NULL DEFAULT '0',
  `feedback_review` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `appointment`
--

INSERT INTO `appointment` (`id`, `doctorid`, `register_user_id`, `serviceid`, `appointmentdate`, `servicedate`, `servicetime`, `remarks`, `status`, `rating`, `isdeleted`, `feedback_review`) VALUES
(1, 1, 1, 1, '2023-11-05', '2023-10-05', '12:38:41', 'very good doctor', 2, 5, 0, 'good feedback'),
(2, 1, 1, 1, '2023-11-20', '2023-11-10', '14:30:00', NULL, 4, 3, 0, 'ok ok ');

-- --------------------------------------------------------

--
-- Table structure for table `assistant`
--

DROP TABLE IF EXISTS `assistant`;
CREATE TABLE IF NOT EXISTS `assistant` (
  `id` int NOT NULL AUTO_INCREMENT,
  `doctorid` int DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `isdeleted` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `doctorid` (`doctorid`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `assistant`
--

INSERT INTO `assistant` (`id`, `doctorid`, `email`, `password`, `name`, `isdeleted`) VALUES
(1, 1, 'abc@gmail.com', '$2y$10$eKHTp.tbyYVLbjdSpv/Ii.hMT2iDOVFeRQGqQ8RpepJ12xaI8S6fO', 'abcabc', 0),
(2, 4, 'doctor@example.com', 'doctorpassword', 'Dr. Smith Johnson', 1);

-- --------------------------------------------------------

--
-- Table structure for table `doctor`
--

DROP TABLE IF EXISTS `doctor`;
CREATE TABLE IF NOT EXISTS `doctor` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) DEFAULT NULL,
  `contactno` varchar(100) NOT NULL,
  `city` varchar(100) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `gender` int DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `website` varchar(100) DEFAULT NULL,
  `regno` varchar(50) DEFAULT NULL,
  `qualification` varchar(100) DEFAULT NULL,
  `photo` varchar(100) DEFAULT NULL,
  `isdeleted` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `doctor`
--

INSERT INTO `doctor` (`id`, `name`, `email`, `password`, `contactno`, `city`, `address`, `gender`, `dob`, `website`, `regno`, `qualification`, `photo`, `isdeleted`) VALUES
(1, 'sahil', 'sahil@gmail.com', '$2y$10$CkLmS432X8uv9FCDODEjT.c.0YJCNz0xL2ZvydMy4TuTmCFnujrbm', '9016293308', 'bhavnagar', 'this is address', 1, '2023-11-09', 'https://picsum.photos/150/150', '123abc123', 'Mbbs', 'https://picsum.photos/150/150', 0),
(2, 'John Doe', 'johndoe@example.com', 'secretpassword', '1234567890', 'New York', '123 Main Street', 0, '1990-01-01', 'www.example.com', 'ABC123', 'MD', 'profile.jpg', 0),
(3, 'John Doe', 'johndoe@example.com', '$2y$10$pRV21ghanXVm97AzRNTETuMz8u/NuocnHtR8sBpZssSrN4loyXHAS', '1234567890', 'New York', '123 Main Street', 0, '1990-01-01', 'www.example.com', 'ABC123', 'MD', 'profile.jpg', 0),
(4, 'John Doe', 'johndoe@example.com', '$2y$10$4eb5xhUdaKlytTH9cGvmxemOD6lUvb6oudIobJ3lkizsWUmdtoMRe', '1234567890', 'New York', '123 Main Street', 0, '1990-01-01', 'www.example.com', 'ABC123', 'MD', 'profile.jpg', 0);

-- --------------------------------------------------------

--
-- Table structure for table `register_user`
--

DROP TABLE IF EXISTS `register_user`;
CREATE TABLE IF NOT EXISTS `register_user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(32) NOT NULL,
  `password` varchar(256) DEFAULT NULL,
  `mobileno` varchar(20) NOT NULL,
  `city` varchar(255) NOT NULL,
  `address` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `bloodgroup` varchar(255) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `gender` int DEFAULT NULL,
  `isdeleted` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `mobileno` (`mobileno`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `register_user`
--

INSERT INTO `register_user` (`id`, `name`, `email`, `password`, `mobileno`, `city`, `address`, `bloodgroup`, `dob`, `gender`, `isdeleted`) VALUES
(1, 'ankitpatel', 'ankitpatel@gmail.com', '$2y$10$LaJcdQE5ULLTKp/28cvQZ.Z28jCoU3jc0O0qkXazFFOHtcT8j8qcG', '9016293308', 'bhavnagar', 'this is address', '0-', '2023-11-09', 1, 0),
(2, 'John Doe', 'johndoe@example.com', '$2y$10$L0pqf86c4z7FTB94Nc4/hOVwxcErGD7hcsUb7o.j7mIqDqmOvl22u', '1234567890', 'New York', '123 Main Street', 'A+', '1990-01-01', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

DROP TABLE IF EXISTS `services`;
CREATE TABLE IF NOT EXISTS `services` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `detail` varchar(255) DEFAULT NULL,
  `charges` decimal(10,2) DEFAULT NULL,
  `duration` varchar(255) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `doctorid` int DEFAULT NULL,
  `isdeleted` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `title`, `detail`, `charges`, `duration`, `photo`, `doctorid`, `isdeleted`) VALUES
(1, 'fever check', 'this is fever check', '50.25', '2minutes', 'https://picsum.photos/150/150', 1, 0),
(2, 'Consultation', 'General Checkup', '100.00', '30', 'service.jpg', 1, 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
