import Swal from "sweetalert2";

const AddNew = () => {
  const formHtml = `
    <input id="title" class="swal2-input" placeholder="Título">
    <input id="date" class="swal2-input" placeholder="Fecha">
    <input id="images" class="swal2-input" placeholder="Imágenes (URL separadas por comas, sin espacios)">
    <input id="imagesDescriptions" class="swal2-input" placeholder="Descripciones de las imágenes (separadas por -, sin espacios)">
    <input id="link" class="swal2-input" placeholder="Enlace">
    <input id="btn" class="swal2-input" placeholder="Botón">
    `;

  const handleAddNewClick = () => {
    Swal.fire({
      title: 'Añadir Novedad',
      html: formHtml,
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Añadir',
      focusConfirm: false,
      preConfirm: () => {
        const title = Swal.getPopup().querySelector('#title').value;
        const date = Swal.getPopup().querySelector('#date').value;
        const images = Swal.getPopup().querySelector('#images').value;
        const imagesDescriptions = Swal.getPopup().querySelector('#imagesDescriptions').value;
        const link = Swal.getPopup().querySelector('#link').value;
        const btn = Swal.getPopup().querySelector('#btn').value;
        if (!title || !date || !images || !imagesDescriptions || !link || !btn) {
          Swal.showValidationMessage('Por favor, completa todos los campos');
        }
        return { title, date, images, imagesDescriptions, link, btn};
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const { title, date, images, imagesDescriptions, link, btn } = result.value;
        const newNovedad = { title, date, images: images.split(','), imagesDescriptions: imagesDescriptions.split('-'), link, btn };
        fetch('/api/news', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newNovedad),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.success) {
              Swal.fire('Éxito', 'Novedad añadida correctamente', 'success');
            } else {
              Swal.fire('Error', data.error || 'Ocurrió un error', 'error');
            }
          })
          .catch((error) => {
            Swal.fire('Error', error.message || 'Ocurrió un error', 'error');
          });
      }
    });
  };

  return (
    <button className="btn btn-primary addBtn py-5" onClick={handleAddNewClick}>
      Añadir Novedad
    </button>
  )
}

export default AddNew