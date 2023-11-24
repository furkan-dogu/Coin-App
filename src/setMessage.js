import Swal from "sweetalert2";

const setMessage = (msg) => {
    Swal.fire({
        title: msg,
        icon: "warning"
      });
}

export default setMessage