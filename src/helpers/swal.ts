import Swal from "sweetalert2";
// title: `<i><b>${name}</b></i> fue actualizada correctamente`,

export const SwalAlert = (title: string) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "bottom-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
  });

  Toast.fire({
    icon: "success",
    title,
  });
};
