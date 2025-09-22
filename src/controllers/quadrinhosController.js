import dados from "../models/dados.js";
const { quadrinhos } = dados;

const getAllQuadrinhos = (req, res) => {
    const { id } = req.query;
    let resultado = quadrinhos;

    res.status(200).json({
        total: resultado.length,
        data: resultado,
    });
};

const getQuadrinhosById = (req, res) => {
     const id = parseInt(req.params.id);
  const quadrinho = quadrinhos.find(p => p.id === id);

  if (quadrinho) {
      res.status(200).json(quadrinho);
  } else {
      res.status(404).json({
          mensagem: "Esse quadrinho não existe"
      })
  }
}

export { getAllQuadrinhos, getQuadrinhosById };