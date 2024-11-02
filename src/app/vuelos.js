// vuelos.js: Agregando clases específicas de vuelo y decoradores adicionales

// Clase base Vuelo
class Vuelo {
  constructor() {
    this.descripcion = "Vuelo básico";
    this.costo = 100;
  }

  obtenerDescripcion() {
    return this.descripcion;
  }

  obtenerCosto() {
    return this.costo;
  }
}

// Clase Vuelo para Primera Clase
class PrimeraClase extends Vuelo {
  constructor() {
    super();
    this.descripcion = "Vuelo en Primera Clase";
    this.costo = 500;
  }
}

// Clase Vuelo para Clase Turista
class ClaseTurista extends Vuelo {
  constructor() {
    super();
    this.descripcion = "Vuelo en Clase Turista";
    this.costo = 300;
  }
}

// Clase Vuelo para Clase Económica
class ClaseEconomica extends Vuelo {
  constructor() {
    super();
    this.descripcion = "Vuelo en Clase Económica";
    this.costo = 150;
  }
}

// Decorador base
class VueloDecorator extends Vuelo {
  constructor(vuelo) {
    super();
    this.vuelo = vuelo;
  }

  obtenerDescripcion() {
    return this.vuelo.obtenerDescripcion();
  }

  obtenerCosto() {
    return this.vuelo.obtenerCosto();
  }
}

// Decorador Comida
class DecoratorComida extends VueloDecorator {
  constructor(vuelo) {
    super(vuelo);
    this.costoComida = 30;
  }

  obtenerDescripcion() {
    return `${this.vuelo.obtenerDescripcion()} + Comida`;
  }

  obtenerCosto() {
    return this.vuelo.obtenerCosto() + this.costoComida;
  }
}

// Decorador Equipaje
class DecoratorEquipaje extends VueloDecorator {
  constructor(vuelo) {
    super(vuelo);
    this.costoEquipaje = 50;
  }

  obtenerDescripcion() {
    return `${this.vuelo.obtenerDescripcion()} + Equipaje`;
  }

  obtenerCosto() {
    return this.vuelo.obtenerCosto() + this.costoEquipaje;
  }
}

// Decorador para servicio de Alcohol (solo para Primera Clase)
class DecoratorAlcohol extends VueloDecorator {
  constructor(vuelo) {
    super(vuelo);
    this.costoAlcohol = 60;
  }

  obtenerDescripcion() {
    return `${this.vuelo.obtenerDescripcion()} + Servicio de Alcohol`;
  }

  obtenerCosto() {
    return this.vuelo.obtenerCosto() + this.costoAlcohol;
  }
}

// Decorador WiFi (para Clase Turista y otras)
class DecoratorWiFi extends VueloDecorator {
  constructor(vuelo) {
    super(vuelo);
    this.costoWiFi = 20;
  }

  obtenerDescripcion() {
    return `${this.vuelo.obtenerDescripcion()} + Acceso a WiFi`;
  }

  obtenerCosto() {
    return this.vuelo.obtenerCosto() + this.costoWiFi;
  }
}

// Decorador Paquete Confort (solo para Clase Económica)
class DecoratorConfort extends VueloDecorator {
  constructor(vuelo) {
    super(vuelo);
    this.costoConfort = 15;
  }

  obtenerDescripcion() {
    return `${this.vuelo.obtenerDescripcion()} + Paquete Confort (Manta y Almohada)`;
  }

  obtenerCosto() {
    return this.vuelo.obtenerCosto() + this.costoConfort;
  }
}

// Exportamos las clases para usarlas en el configurador
module.exports = {
  Vuelo,
  PrimeraClase,
  ClaseTurista,
  ClaseEconomica,
  DecoratorComida,
  DecoratorEquipaje,
  DecoratorAlcohol,
  DecoratorWiFi,
  DecoratorConfort,
};
