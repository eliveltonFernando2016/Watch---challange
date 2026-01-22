declare global {
  interface MenuItem {
    label: string
    link: string
    icon: string
    subTitle?: string
    isOpen?: boolean
    subItems?: {
      label: string
      link: string
    }[]
  }
}
export { MenuItem }