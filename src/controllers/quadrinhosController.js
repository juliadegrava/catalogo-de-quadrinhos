import dados from "../models/dados.js";
const { quadrinhos } = dados;

const getAllQuadrinhos = (req, res) => {
   
    res.status(200).json({
        total: quadrinhos.length,
        data: quadrinhos,
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
};

const getQuadrinhosByEditora = (req, res) => {
    let editora = req.params.editora;
    console.log(editora);
    
    editora = editora.toLowerCase();

  const quadrinhosFiltrados = quadrinhos.filter(q => q.editora.toLowerCase().includes(editora));

  if (quadrinhosFiltrados) {
      res.status(200).json(quadrinhos);
  } else {
      res.status(404).json({
          mensagem: "Não foi encontrado nenhum quadrinho dessa editora."
      })
  }
};

const getQuadrinhosByHeroi = (req, res) => {
    let heroi = req.params.heroi;
    console.log(heroi);
    
    heroi = heroi.toLowerCase();

  const quadrinhosFiltrados = quadrinhos.filter(q => q.heroi.toLowerCase().includes(heroi));

  if (quadrinhosFiltrados) {
      res.status(200).json(quadrinhos);
  } else {
      res.status(404).json({
          mensagem: "Não foi encontrado nenhum quadrinho com esse heroi."
      })
  }
};

const getQuadrinhosBySaga = (req, res) => {
    let saga = req.params.saga;
    saga = saga.toLowerCase();

  const quadrinhosFiltrados = quadrinhos.filter(q => q.saga.toLowerCase().includes(saga));

  if (quadrinhosFiltrados) {
      res.status(200).json(quadrinhos);
  } else {
      res.status(404).json({
          mensagem: "Não foi encontrado nenhum quadrinho dessa saga."
      })
  }
};

const getQuadrinhosByAnoPublicacao = (req, res) => {
    let anoPublicacao = parseInt(req.params.anoPublicacao);

  const quadrinhosFiltrados = quadrinhos.find(q => q.anoPublicacao === anoPublicacao);

  if (quadrinhosFiltrados) {
      res.status(200).json(quadrinhos);
  } else {
      res.status(404).json({
          mensagem: "Não foi encontrado nenhum quadrinho publicado nesse ano."
      })
  }
};

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
};

const updateQuadrinho = (req, res) => {
    const id = parseInt(req.params.id);

    const { titulo, editora, numero, saga, heroi, autor, anoPublicacao, preco } = req.body;

    if (isNaN(id)) {
        return res.status(400).json({
            success: false,
            message: "O id deve ser um número válido"
        })
    }


    const quadrinhoExiste = quadrinhos.find(quadrinho => quadrinho.id === id);

    if (!quadrinhoExiste) {
        return res.status(400).json({
            success: false,
            message: "O quadrinho não existe."
        })
    }

    if (preco <= 0) {
        return res.status(400).json({
            success: false,
            message: "O campo 'preço' deve ser maior que 0."
        });
    }
    
    const quadrinhosAtualizados = quadrinhos.map(quadrinho => {
        return quadrinho.id === id
            ? {
                ...quadrinho,
                ...(titulo      && { titulo }),
                ...(editora    && { editora }),
                ...(numero  && { numero }),
                ...(saga      && { saga }),
                ...(heroi      && { heroi }),
                ...(autor && { autor }),
                ...(anoPublicacao && { anoPublicacao }),
                ...(preco && { preco })
            }
            : quadrinho;
    });
    
    quadrinhos.splice(0, quadrinhos.length, ...quadrinhosAtualizados);

    const quadrinhoNovo = quadrinhos.find(quadrinho => quadrinho.id === id);

    res.status(200).json({
        success: true,
        message: "Dados atualizados com sucesso",
        quadrinho: quadrinhoNovo
        
    })
};

const deleteQuadrinho = (req, res) => {
    let id = parseInt(req.params.id);
    const quadrinhoParaRemover = quadrinho.find(q => q.id === id);

    if (!quadrinhoParaRemover) {
        return res.status(404).json({
            success: false,
            message: 'Este quadrinho nao existe'
        })
    }
    const quadrinhosFiltrados = quadrinhos.filter(quadrinho => quadrinho.id !== id);
    quadrinhos.splice(0, quadrinhos.length, ...quadrinhosFiltrados);
    res.status(200).json({
        success: true,
        message: 'Quadrinho deletado com sucesso',
        quadrinhoRemovida: quadrinhoParaRemover
    })
};


export { getAllQuadrinhos, getQuadrinhosById, getQuadrinhosByEditora, getQuadrinhosByHeroi, getQuadrinhosBySaga, getQuadrinhosByAnoPublicacao, createQuadrinho, deleteQuadrinho, updateQuadrinho }