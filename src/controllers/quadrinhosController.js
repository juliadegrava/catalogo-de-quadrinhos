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
  const quadrinho = quadrinhos.find(q => q.id === id);

  if (quadrinho) {
      res.status(200).json(quadrinho);
  } else {
      res.status(404).json({
          mensagem: "Esse quadrinho não existe"
      })
  }
}

const getQuadrinhosByEditora = (req, res) => {
    let editora = req.params.editora;
    editora = editora.toLowerCase();

  const quadrinhosFiltrados = quadrinhos.filter(q => q.editora.toLowerCase().includes(editora));

  if (quadrinhosFiltrados) {
      res.status(200).json(quadrinhosFiltrados);
  } else {
      res.status(404).json({
          mensagem: "Não foi encontrado nenhum quadrinho dessa editora."
      })
  }
}

const createQuadrinho = (req, res) => {
    const { titulo, editora, numero, saga, heroi, autor, anoPublicacao, preco } = req.body;

    if (preco <= 0) {
        return res.status(400).json({
            success: false,
            message: "O campo 'preço' deve ser maior que 0."
        });
    }

 const novoQuadrinho = {
        id: quadrinhos.length + 1,
        titulo,
        editora,
        numero,
        saga,
        heroi,
        autor,
        anoPublicacao,
        preco
    }

    quadrinhos.push(novoQuadrinho);
    res.status(201).json({
        success: true,
        message: "Quadrinho cadastrado com sucesso",
        quadrinho: novoQuadrinho
    })
}



export { getAllQuadrinhos, getQuadrinhosById, getQuadrinhosByEditora, createQuadrinho, deleteQuadrinho };