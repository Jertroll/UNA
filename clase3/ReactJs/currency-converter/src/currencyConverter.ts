export interface ExchangeRateResponse {
    rate: number;
  }
  
  /**
   * Función para obtener la tasa de cambio entre dos monedas.
   * 
   * Requisitos:
   * - Realiza una llamada a una API (usando fetch) a la URL:
   *   https://api.ejemplo.com/exchange/${fromCurrency}/${toCurrency}
   * - Si la respuesta no es exitosa (response.ok === false), lanza un error con el mensaje:
   *   "Error al obtener la tasa de cambio"
   * - Si la respuesta es exitosa pero no contiene la propiedad "rate" en el JSON, lanza un error con:
   *   "No se pudo obtener la tasa de cambio"
   * - Si todo es correcto, retorna el objeto obtenido (debe tener la propiedad "rate")
   */
  export const fetchExchangeRate = async (fromCurrency: string, toCurrency: string): Promise<ExchangeRateResponse> => {
    // TODO: Implementar la llamada a la API y validaciones
      const response = await fetch(`https://api.ejemplo.com/exchange/${fromCurrency}/${toCurrency}`);

      if (response.ok === false) {
        throw new Error("Error al obtener la tasa de cambio");
      }
      
      const datos = await response.json();
      if (response.ok && !datos.rate) {
        throw new Error("No se pudo obtener la tasa de cambio");
      } else 
      if (response.ok && datos.rate) {
        return datos.rate
      }
    throw new Error("Not implemented");
  };
  
  /**
   * Función para convertir un monto de una moneda a otra.
   * 
   * Requisitos:
   * - Verifica que el monto recibido sea mayor a 0.
   *   Si no lo es, lanza un error: "El monto debe ser mayor a 0"
   * - Llama a fetchExchangeRate para obtener la tasa de cambio entre las monedas indicadas.
   * - Multiplica el monto por la tasa obtenida y retorna el valor convertido.
   */
  export const convertirMoneda = async (monto: number, fromCurrency: string, toCurrency: string): Promise<number> => {
    // TODO: Implementar la validación del monto y la conversión usando fetchExchangeRate

    if (monto <= 0) {
      throw new Error("El monto debe ser mayor a 0");
    } else 
    if (monto > 0) {
      const rate =  await fetchExchangeRate(fromCurrency, toCurrency);
      const tasaValida = typeof rate === 'number' && !isNaN(rate) ? rate : 1; 
      return monto * tasaValida;
    }
    throw new Error("Not implemented");
  };
  