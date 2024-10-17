
// Instruções:

// níveis de usuário

let nivelDoUsuario = "editor"

switch (nivelDoUsuario) {
    case "admin":
        console.log("Acesso totaaalll ao sistema")
        break
    case "editor":
        console.log("Acesso apenas para edição. Doc liberado para edicao")
        break
    case "comentador":
        console.log("Acesso apenas para comentários. Doc liberado para comentarios")
        break
    case "visualização":
        console.log("Acesso apenas para visualizar")
        break
    default:
        console.log("ACESSO NEGADOOOO!!!!!!!! Entre em contato com as minas")
}
