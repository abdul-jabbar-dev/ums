'use client'
import { Breadcrumb } from 'antd'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HomeOutlined } from '@ant-design/icons'
export default function MyBreadcrumb({ item }: { item: { title: string | JSX.Element, href?: string }[] }) {
    const router = usePathname()
    const listPath: string[] = router.split("/");
    let listItem: { title: string | JSX.Element; href: string }[] = listPath.map((element, i) => ({
        title: element,
        href: listPath.slice(0, i + 1).join('/'),
    }));
    listItem = listItem.map(emp => emp.title == '' ? ({ title: <HomeOutlined />, href: '/' }) : emp) 
    return (
        <Breadcrumb
         style={{margin:'10px '}}
            separator="/"
            items={listItem.map(itm => ({ title: (itm.href ? <Link href={(itm.href)}>{itm.title}</Link> : itm.title) }))}
        />
    )
}
