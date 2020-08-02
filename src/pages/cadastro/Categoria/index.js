import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault'
import FormField from '../../../components/FormField'

function CadastroCategoria() {
  const valueInitial =  {
    nome: '',
    descricao: '',
    cor: '',
  }

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valueInitial);

  function setValue(key, value) {
    setValues ({
      ...values,
      [key]: value, //nome:valor
    })
  }

  function handleChange(infosdoEvento) {
    setValue(
      infosdoEvento.target.getAttribute("name"),
      infosdoEvento.target.value
    );
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(infosdoEvento) {
        infosdoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values
        ]);

        setValues(valueInitial);
      }}>

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="Cor"
          value={values.cor}
          onChange={handleChange}
        />
        
        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>

      <Link to="/">
          Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;