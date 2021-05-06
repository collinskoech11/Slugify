function copyFun() {
    var copyText = document.getElementById("toCopy");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");

}