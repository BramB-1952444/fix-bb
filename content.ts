import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["https://bb.uhasselt.be/*"]
}

window.addEventListener("load", () => {
  console.log(
    "You may find that having is not so pleasing a thing as wanting. This is not logical, but it is often true."
  )

  const observer = new MutationObserver((mutations) => {
    // check that there is a node with class "file-preview"
    mutations.forEach((mutation) => {
        if (mutation.type == "attributes"){
            const element = mutation.target as HTMLElement
            if (element.classList.contains("file-preview")){
                console.log("file-preview")
                // get preview-url from first child element
                const previewUrl = element.firstElementChild?.getAttribute("file-preview-url")
                console.log(previewUrl)
                // add open button to page and open in new tab
                const openButton = document.createElement("a")
                openButton.innerText = "Open"
                openButton.href = previewUrl ?? ""
                openButton.target = "_blank"
                element.parentElement?.insertBefore(openButton, element)
            }
        }
    })
  })
  observer.observe(document.body, {subtree: true, attributes: true})
})
