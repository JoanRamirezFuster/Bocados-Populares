function search() {
  // Obtener el valor ingresado por el usuario
  var searchValue = document.getElementById("search-input").value;

  // Obtener los datos del archivo JSON
  fetch("restaurantes.json")
    .then((response) => response.json())
    .then((data) => {
      // Filtrar los resultados por ciudad
      var filteredRestaurants = filtrarRestaurantesPorCiudad(
        data.restaurantes,
        searchValue
      );

      // Mostrar los resultados en la página
      displayResults(filteredRestaurants);
    });
}

function filtrarRestaurantesPorCiudad(restaurantes, ciudad) {
  // Filtrar los restaurantes por ciudad
  const restaurantesFiltrados = restaurantes.filter(
    (restaurante) => restaurante.ciudad.toLowerCase() === ciudad.toLowerCase()
  );

  // Devolver los restaurantes filtrados
  return restaurantesFiltrados;
}

function displayResults(restaurants) {
  var resultsContainer = document.getElementById("results");

  // Limpiar los resultados anteriores
  resultsContainer.innerHTML = "";

  // Mostrar los resultados
  restaurants.forEach(function (restaurant) {
    var restaurantElement = document.createElement("div");
    restaurantElement.classList.add("restaurant"); // Agrega la clase "restaurant"
    restaurantElement.innerHTML = `
        <h2>${restaurant.nombre}</h2>
        <p>Horario:</p>
        <ul>
          <li>Lunes ${restaurant.horario.lunes}</li>
          <li>Martes ${restaurant.horario.martes}</li>
          <li>Miércoles ${restaurant.horario.miércoles}</li>
          <li>Jueves ${restaurant.horario.jueves}</li>
          <li>Viernes ${restaurant.horario.viernes}</li>
          <li>Sábado ${restaurant.horario.sábado}</li>
          <li>Domingo ${restaurant.horario.domingo}</li>
        </ul>
        <p>Menu:</p>
        <a target="_blank" href="${restaurant.menu}">Menu ${restaurant.nombre}</a>
        <p>Ubicación:</p>
        <p>${restaurant.ubicacion}</p>
        <p>Imagen:</p>
        <img src="${restaurant.imagen}" alt="foto_${restaurant.nombre}" />
      `;
    resultsContainer.appendChild(restaurantElement);
  });
}

// Limpiar los resultados anteriores
resultsContainer.innerHTML = "";

// Mostrar los resultados
restaurants.forEach(function (restaurant) {
  var restaurantElement = document.createElement("div");
  restaurantElement.innerHTML = `
            <h2>${restaurant.nombre}</h2>
            <p>Horario:</p>
            <ul>
              <li>Lunes ${restaurant.horario.lunes}</li>
              <li>Martes ${restaurant.horario.martes}</li>
              <li>Miércoles ${restaurant.horario.miércoles}</li>
              <li>Jueves ${restaurant.horario.jueves}</li>
              <li>Viernes ${restaurant.horario.viernes}</li>
              <li>Sábado ${restaurant.horario.sábado}</li>
              <li>Domingo ${restaurant.horario.domingo}</li>
            </ul>
            <p>Menu:</p>
            <a target="_blank" href="${restaurant.menu}">Menu ${restaurant.nombre}</a>
            <p>Ubicación:</p>
            <p>${restaurant.ubicacion}</p>
            <p>Imagen:</p>
            <img src="${restaurant.imagen}" alt="foto_${restaurant.nombre}" />
          `;
  resultsContainer.appendChild(restaurantElement);
});
