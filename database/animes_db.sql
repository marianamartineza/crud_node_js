-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-11-2023 a las 07:07:14
-- Versión del servidor: 10.1.38-MariaDB
-- Versión de PHP: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `animes_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `animes`
--

CREATE TABLE `animes` (
  `id` int(11) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `descripcion` text NOT NULL,
  `imagen` varchar(250) NOT NULL,
  `demografia` enum('shounen','shoujo','josei','kodomo','seinen','spokon') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `animes`
--

INSERT INTO `animes` (`id`, `nombre`, `descripcion`, `imagen`, `demografia`) VALUES
(1, 'boku no hero academia', 'En un mundo donde tener superpoderes es lo más común, nace Izuku Midoriya, un niño sin este don que sueña con ser un superhéroe. La gente con este tipo de habilidades es conocida como \'Quirk\' y, debido a no pertenecer a esta clase, Izuku sufre bullying en su escuela por ser diferente.', '/images/41048fe9-c44e-4608-abd2-02d3b7bd42e9.jpeg', 'shounen'),
(2, 'Why Raeliana Ended Up at the Duke\'s Mansion', 'Why Raeliana Ended Up at the Duke\'s Mansion es un anime basado en la novela web como en el webtoon escrita por Milcha. Rinko Hanasaki se ha reencarnado en el mundo de una famosa novela visual, pero lo ha hecho como Raeliana McMillan, personaje que es asesinado por su esposo.', '/images/bdd053a2-de69-4578-82e1-74f9311fa290.jpeg', 'josei'),
(3, 'Clannad', 'Clannad narra la historia de Tomoya Okazaki, un melancólico estudiante de tercer año de preparatoria. Al morir su madre cuando él era joven, queda en custodia de Naoyuki, su padre, quien al verse afectado por esta trágica pérdida acaba hundido en el juego y el alcohol.', '/images/fd282c16-9589-4ba4-bbc2-1b94b033f502.jpeg', 'shoujo'),
(4, 'blue lock', 'Serie de TV (2022). 24 episodios. Después de una desastrosa participación en el Mundial de fútbol de 2018, el equipo de Japón busca un delantero \"top\" que pueda inyectar el hambre de victorias y de goles que el equipo necesita, pero para buscarlo necesitarán tomar medidas drásticas... Por lo que deciden juntar a los 300 mejores jugadores jóvenes japoneses en una \"prisión-instituto\" con severos entrenamientos y pruebas hasta poder conseguir al delantero centro perfecto.', '/images/38fd1748-d431-4f5b-9393-4e10a142e118.jpeg', 'spokon'),
(6, 'full metal brother alchemist', 'Edward y Alphonse Elric son dos hermanos en busca de la piedra filosofal. Viven en un mundo donde la alquimia se utiliza como arma. Una dolorosa pérdida empuja a los hermanos Elric a realizar un prohibido experimento que acaba de forma inesperada y llevándose por el camino el cuerpo de Alphonse y algunas partes del de Edward. Así, con el alma del primero a salvo en una armadura y las extremidades del segundo convertidas en metal, los hermanos confían en que la piedra filosofal les otorgará el poder y las respuestas necesarias para recuperar lo perdido', '/images/88a73cf4-0983-4e01-be11-de30fc15390d.jpeg', 'shounen');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `animes`
--
ALTER TABLE `animes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `animes`
--
ALTER TABLE `animes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
