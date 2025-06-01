-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 01, 2025 at 05:42 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `empleados_node`
--

-- --------------------------------------------------------

--
-- Table structure for table `empleados`
--

CREATE TABLE `empleados` (
  `id` int(11) NOT NULL,
  `nombre` varchar(25) NOT NULL,
  `apellido_pat` varchar(20) NOT NULL,
  `apellido_mat` varchar(20) NOT NULL,
  `telefono` varchar(13) NOT NULL,
  `email` varchar(50) NOT NULL,
  `direccion` varchar(100) NOT NULL
) ;

--
-- Dumping data for table `empleados`
--

INSERT INTO `empleados` (`id`, `nombre`, `apellido_pat`, `apellido_mat`, `telefono`, `email`, `direccion`) VALUES
(1, 'Francisco', 'Gutierrez', 'Ruiz', '4422889592', 'francisco@gmail.com', 'Cedro 2'),
(2, 'Isabel', 'Medina', 'Cuevas', '4426136464', 'imedina@gmail.com', 'Rio Ayutla 45'),
(4, 'Sergio', 'Marquez', 'del Castillo', '4421884654', 'sergio@hotmail.com', 'Lomas del Marques 24'),
(6, 'Arturo', 'Medina', 'Cuevas', '4421884654', 'arturo@gmail.com', 'Rio Ayutla 45');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL
) ;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`username`, `password`) VALUES
('juan', 'abc12345');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `empleados`
--
ALTER TABLE `empleados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
