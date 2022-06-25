var ulDOM = document.querySelector("#list")
ulDOM.addEventListener('submit', newElement)

let ullength = document.getElementsByTagName("li");

function newElement() {
    var liDOM = document.createElement('li')
    if (document.querySelector("#task").value.trim()) {
        liDOM.innerHTML = document.querySelector("#task").value
        ulDOM.appendChild(liDOM)
        document.querySelector("#task").value = ""
        // <i class="bi bi-x-circle float-right mr-4"></i>
        var icon_ = document.createElement("i")
        icon_.classList.add("bi", "bi-x-circle", "float-right", "mr-4")
        console.log(liDOM)
        liDOM.appendChild(icon_)

        liDOM.onclick = check;

        icon_.addEventListener('click', function () {
            console.log("Silinme işlemi gerçekleşti")
            icon_.parentNode.remove(icon_);
            $(".success.delete").toast("show");
        })
        $(".success.add").toast("show");
    } else {
        $(".error").toast("show");
    }

    const removeAllDOM = document.querySelector("#btnRemoveAll");
    removeAllDOM.addEventListener("click", function () {
        (liDOM.classList.contains("checked")) ? (liDOM.remove(), $(".success.delete").toast("show")) : $(".error.deleteAll").toast("show");

    });

}

function removeAll() {
    liDOM.remove();

}

function check() {
    this.classList.toggle("checked");
}



