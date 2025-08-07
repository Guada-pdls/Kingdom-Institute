import Swal from "sweetalert2"

const EditAndDeleteNewsButtons = ({ newItem }) => {
  const html = `
    <input type="text" id="title" class="swal2-input" placeholder="Título" value="${newItem.title}">
    <input type="text" id="date" class="swal2-input" placeholder="Fecha" value="${newItem.date}">
    <input type="text" id="images" class="swal2-input" placeholder="Imágenes" value="${newItem.images}">
    <input type="text" id="imagesDescriptions" class="swal2-input" placeholder="Descripciones de las imágenes" value="${newItem.imagesDescriptions}">
    <input type="text" id="link" class="swal2-input" placeholder="Enlace" value="${newItem.link}">
    <input type="text" id="btn" class="swal2-input" placeholder="Botón" value="${newItem.btn}">
  `

  const handleEditNew = () => {
    Swal.fire({
      title: "Editar novedad",
      html,
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonText: "Guardar",
      preConfirm: () => {
        const title = Swal.getPopup().querySelector("#title").value
        const date = Swal.getPopup().querySelector("#date").value
        const images = Swal.getPopup().querySelector("#images").value
        const imagesDescriptions = Swal.getPopup().querySelector("#imagesDescriptions").value
        const link = Swal.getPopup().querySelector("#link").value
        const btn = Swal.getPopup().querySelector("#btn").value

        if (!title || !date || !images || !imagesDescriptions || !link || !btn) {
          Swal.showValidationMessage("Por favor, completa todos los campos")
          return false
        }

        return { title, date, images, imagesDescriptions, link, btn }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const { title, date, images, imagesDescriptions, link, btn } = result.value
        const editedNew = { id: newItem.id, title, date, images: images.split(","), imagesDescriptions: imagesDescriptions.split("-"), link, btn }
        console.log(editedNew)
        fetch(`/api/news/${newItem.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editedNew),
        })
          .then(res => res.json())
          .then((data) => {
            if (data.success) {
              Swal.fire("Éxito", "Novedad editada correctamente", "success")
            } else {
              Swal.fire("Error", data.error || "Ocurrió un error", "error")
            }
          })
          .catch((error) => {
            console.log(error)
            Swal.fire("Error", error.message || "Ocurrió un error", "error")
          })
      }
    })
  }

  return (
    <div className="justify-content-end d-flex card-header">
      <button className="btn btn-primary" onClick={handleEditNew}>Editar</button>
      <button className="btn btn-danger">Eliminar</button>
    </div>
  )
}

export default EditAndDeleteNewsButtons