import Scanner from "../models/Scanner.js";

const crearRegistro = async (req, res) => {
  try {
    const registro = await Scanner.create(req.body);

    res.status(200).json({
      success: true,
      registro,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ errores: ["Error del servidor: " + error.message] });
  }
};

const aumentarContador = async (req, res) => {
  try {
    const existeRegistro = await Scanner.findById(req.params.id);

    if (!existeRegistro) {
      return res
        .status(500)
        .json({ errores: ["Error del servidor: No existe"] });
    }

    const updateContador = await Scanner.findByIdAndUpdate(
      req.params.id,
      {
        $set: { contador: existeRegistro.contador + 1 },
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      updateContador,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ errores: ["Error del servidor: " + error.message] });
  }
};

export { crearRegistro, aumentarContador };
