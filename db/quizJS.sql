-- phpMyAdmin SQL Dump
-- version 4.2.12deb2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Oct 13, 2015 at 04:38 PM
-- Server version: 5.6.25-0ubuntu0.15.04.1
-- PHP Version: 5.6.4-4ubuntu6.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `quizJS`
--

-- --------------------------------------------------------

--
-- Table structure for table `options`
--

CREATE TABLE IF NOT EXISTS `options` (
  `questionID` int(11) NOT NULL,
  `optionNumber` int(11) NOT NULL,
  `option` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `options`
--

INSERT INTO `options` (`questionID`, `optionNumber`, `option`) VALUES
(1, 1, 'Rhyhorn'),
(1, 2, 'Venusaur'),
(1, 3, 'Blastoise'),
(1, 4, 'Snorlax'),
(2, 1, 'Pikachu'),
(2, 2, 'Zapdos'),
(2, 3, 'Electibuzz'),
(2, 4, 'Fearow'),
(3, 1, 'Hoenn'),
(3, 2, 'Johto'),
(3, 3, 'Kanto'),
(3, 4, 'Unova'),
(4, 1, 'Fire'),
(4, 2, 'Flying'),
(4, 3, 'Fighting'),
(4, 4, 'Dragon'),
(5, 1, 'Suicune'),
(5, 2, 'Zapdos'),
(5, 3, 'Moltres'),
(5, 4, 'Articuno'),
(6, 1, '1'),
(6, 2, '2'),
(6, 3, '3'),
(6, 4, '4'),
(7, 1, '100'),
(7, 2, '149'),
(7, 3, '150'),
(7, 4, '151'),
(8, 1, 'Wigglytuff'),
(8, 2, 'Jigglypuff'),
(8, 3, 'Wobbuffet'),
(8, 4, 'Rhydon'),
(9, 1, 'Zubat'),
(9, 2, 'Marowak'),
(9, 3, 'Kingler'),
(9, 4, 'Raticate'),
(10, 1, 'Bulbasaur'),
(10, 2, 'Lapras'),
(10, 3, 'Mew'),
(10, 4, 'Vulpix');

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE IF NOT EXISTS `questions` (
  `questionID` int(11) NOT NULL,
  `question` varchar(256) NOT NULL,
  `answer` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`questionID`, `question`, `answer`) VALUES
(1, 'What is the final evolution of Squirtle?', 3),
(2, 'Who is the electric mouse pokemon?', 1),
(3, 'From what primary region are the first gen pokemon?', 3),
(4, 'Charizard gains which type when evolving from charmeleon?', 2),
(5, 'Which of the legendary birds has the ICE type?', 4),
(6, 'How many legendary birds are there?', 3),
(7, 'How many pokemon are in the first generation?', 4),
(8, 'This pokemon is known for it''s sleep inducing songs.', 2),
(9, 'This pokemon is commonly found in caves. Almost too commonly!', 1),
(10, 'This pokemon evolves into Ninetales.', 4);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `options`
--
ALTER TABLE `options`
 ADD PRIMARY KEY (`questionID`,`optionNumber`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
 ADD PRIMARY KEY (`questionID`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
