import { onMounted } from 'vue'

export function useSEO({
  title,
  description,
  canonical
}) {
  onMounted(() => {
    // Title
    document.title = title

    // Description
    let descriptionTag = document.querySelector(
      'meta[name="description"]'
    )

    if (!descriptionTag) {
      descriptionTag = document.createElement('meta')
      descriptionTag.setAttribute('name', 'description')
      document.head.appendChild(descriptionTag)
    }

    descriptionTag.setAttribute(
      'content',
      description
    )

    // Canonical
    let canonicalTag = document.querySelector(
      'link[rel="canonical"]'
    )

    if (!canonicalTag) {
      canonicalTag = document.createElement('link')
      canonicalTag.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalTag)
    }

    canonicalTag.setAttribute(
      'href',
      canonical
    )
  })
}