// No cambies los nombres de las funciones.

// --- Temario ampliado: constantes ---
const resultadoTipoFuncionExpresadaVar = 'undefined';

// Función flecha que duplica un número
let duplicarConFlecha = (num) => num * 2;

function devolverPrimerElemento(array) {
  return array[0];
}

function devolverUltimoElemento(array) {
  return array[array.length - 1];
}

function obtenerLargoDelArray(array) {
  return array.length;
}

function incrementarPorUno(array) {
  return array.map((n) => n + 1);
}

function agregarItemAlFinalDelArray(array, elemento) {
  array.push(elemento);
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  return palabras.join(' ');
}

function arrayContiene(array, elemento) {
  return array.includes(elemento);
}

function agregarNumeros(numeros) {
  return numeros.reduce((acc, n) => acc + n, 0);
}

function promedioResultadosTest(resultadosTest) {
  const suma = resultadosTest.reduce((acc, n) => acc + n, 0);
  return suma / resultadosTest.length;
}

function numeroMasGrande(numeros) {
  return numeros.reduce((mayor, n) => (n > mayor ? n : mayor), numeros[0]);
}

function multiplicarArgumentos(...args) {
  if (args.length === 0) return 0;
  return args.reduce((prod, n) => prod * n, 1);
}

function crearGato(nombre, edad) {
  return {
    nombre,
    edad,
    meow() {
      return 'Meow!';
    },
  };
}

function agregarPropiedad(objeto, property) {
  const resultado = objeto;
  resultado[property] = null;
  return resultado;
}

function invocarMetodo(objeto, metodo) {
  objeto[metodo]();
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  return objetoMisterioso.numeroMisterioso * 5;
}

function eliminarPropiedad(objeto, propiedad) {
  const resultado = objeto;
  delete resultado[propiedad];
  return resultado;
}

function nuevoUsuario(nombre, email, password) {
  return { nombre, email, password };
}

function tieneEmail(usuario) {
  return usuario.email !== null && usuario.email !== undefined;
}

function tienePropiedad(objeto, propiedad) {
  return Object.prototype.hasOwnProperty.call(objeto, propiedad);
}

function verificarPassword(usuario, password) {
  return usuario.password === password;
}

function actualizarPassword(usuario, nuevaPassword) {
  const resultado = usuario;
  resultado.password = nuevaPassword;
  return resultado;
}

function agregarAmigo(usuario, nuevoAmigo) {
  usuario.amigos.push(nuevoAmigo);
  return usuario;
}

function pasarUsuarioAPremium(usuarios) {
  return usuarios.map((u) => {
    const nuevo = u;
    nuevo.esPremium = true;
    return nuevo;
  });
}

function sumarLikesDeUsuario(usuario) {
  return usuario.posts.reduce((acc, post) => acc + post.likes, 0);
}

function agregarMetodoCalculoDescuento(producto) {
  const resultado = producto;
  resultado.calcularPrecioDescuento = function calcularPrecioDescuento() {
    const descuento = this.precio * this.porcentajeDeDescuento;
    return this.precio - descuento;
  };
  return resultado;
}

function invocarCallback(cb) {
  cb();
}

function sumarArray(numeros, cb) {
  const suma = numeros.reduce((acc, n) => acc + n, 0);
  cb(suma);
}

function forEach(array, cb) {
  for (let i = 0; i < array.length; i += 1) {
    cb(array[i]);
  }
}

function map(array, cb) {
  const nuevo = [];
  for (let i = 0; i < array.length; i += 1) {
    nuevo.push(cb(array[i]));
  }
  return nuevo;
}

function filter(array, cb) {
  const nuevo = [];
  for (let i = 0; i < array.length; i += 1) {
    if (cb(array[i])) {
      nuevo.push(array[i]);
    }
  }
  return nuevo;
}

function sacarUltimoConPop(arreglo) {
  return arreglo.pop();
}

function sacarPrimeroConShift(arreglo) {
  return arreglo.shift();
}

function unirConSeparador(elementos, separador) {
  return elementos.join(separador);
}

function indicePrimero(arreglo, item) {
  return arreglo.indexOf(item);
}

function indiceUltimo(arreglo, item) {
  return arreglo.lastIndexOf(item);
}

function existeConIncludes(arreglo, item) {
  return arreglo.includes(item);
}

function subArregloCopia(origen, inicio, fin) {
  return origen.slice(inicio, fin);
}

function pegarDosArreglos(arregloA, arregloB) {
  return arregloA.concat(arregloB);
}

function aplicarSpliceDesde(arreglo, desde, borrarCantidad, ...insertarItems) {
  arreglo.splice(desde, borrarCantidad, ...insertarItems);
  return arreglo;
}

function invertirEnLugar(arreglo) {
  arreglo.reverse();
  return arreglo;
}

function ordenarNumerosAsc(arreglo) {
  arreglo.sort((a, b) => a - b);
  return arreglo;
}

function sumatorioConReduce(numeros, inicial = 0) {
  return numeros.reduce((acc, elem) => acc + elem, inicial);
}

function agruparPorCampoReduce(listaObjetos, nombreCampo) {
  return listaObjetos.reduce((acc, item) => {
    const clave = item[nombreCampo];
    const resultado = acc;
    if (!resultado[clave]) {
      resultado[clave] = [];
    }
    resultado[clave].push(item);
    return resultado;
  }, {});
}

function agruparPorCampoObjectGroupBy(listaObjetos, nombreCampo) {
  return listaObjetos.reduce((acc, item) => {
    const clave = item[nombreCampo];
    const resultado = acc;
    if (!resultado[clave]) {
      resultado[clave] = [];
    }
    resultado[clave].push(item);
    return resultado;
  }, {});
}

function encadenarOperacionesSinAnidar(valorInicial, funcionesTransform) {
  let resultado = valorInicial;
  for (let i = 0; i < funcionesTransform.length; i += 1) {
    resultado = funcionesTransform[i](resultado);
  }
  return resultado;
}

function objetoNombreMayuscConFlechaAnidada(nombre) {
  return {
    nombre,
    enMayuscMedianteFlecha() {
      const flecha = () => this.nombre.toUpperCase();
      return flecha();
    },
  };
}

function establecerValorMismaReferencia(objetoConstanteRef, propiedadString, nuevoValor) {
  const resultado = objetoConstanteRef;
  resultado[propiedadString] = nuevoValor;
  return resultado;
}

const sumarMedianteExpresionNombrada = function nombradoInternamente(a, b) {
  return a + b;
};

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  resultadoTipoFuncionExpresadaVar,
  duplicarConFlecha,
  sumarMedianteExpresionNombrada,
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento,
  invocarCallback,
  sumarArray,
  forEach,
  map,
  filter,
  sacarUltimoConPop,
  sacarPrimeroConShift,
  unirConSeparador,
  indicePrimero,
  indiceUltimo,
  existeConIncludes,
  subArregloCopia,
  pegarDosArreglos,
  aplicarSpliceDesde,
  invertirEnLugar,
  ordenarNumerosAsc,
  sumatorioConReduce,
  agruparPorCampoReduce,
  agruparPorCampoObjectGroupBy,
  encadenarOperacionesSinAnidar,
  objetoNombreMayuscConFlechaAnidada,
  establecerValorMismaReferencia,
};