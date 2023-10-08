
const Paciente = () => {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {""}
          <span className="font-normal normal-case">Hook</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {""}
          <span className="font-normal normal-case">Carles</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {""}
          <span className="font-normal normal-case">correo@gmail.com</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {""}
          <span className="font-normal normal-case">13-3-23</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {""}
          <span className="font-normal normal-case">Lorem ipsum dolor sit amet consectetur adipisicing elit. In deserunt sapiente, reiciendis maiores nihil iure facilis ex. Obcaecati exercitationem, odit consequuntur accusamus iusto nesciunt in, commodi dolore excepturi deleniti aspernatur.</span>
        </p>
      </div>
  )
}

export default Paciente