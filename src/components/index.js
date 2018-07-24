/* 
说明：这是一个组件目录，方便读取所需的组件
只需要import index.js所在的文件夹
就可以通过 { OneCom } from './indexjs所在文件夹'取到组件
 */

//共用组件
import header from './common/Header'
import footer from './common/Footer'
//导航所用组件
import nav from './Nav/Nav'
import routerLink from './Nav/RouterLink'
//路由 /CATEGORIRES 所用组件
import oneCategory from './r-categories/OneCategory'
//路由 / 所用组件
import nextPage from './r-randomRooms/NextPage'
import roomBrief from './r-randomRooms/RoomBrief'
//路由 /mySpace 所用组件
import input from './r-mySpace/Input'
import candy from './r-mySpace/Candy'
import oneList from './r-mySpace/OneList'
import status from './r-mySpace/Status'

//-------分割线------------

//共用组件
export const Footer = footer
export const Header = header

//导航所用组件
export const Nav = nav
export const RouterLink = routerLink

//路由 /CATEGORIRES 所用组件
export const OneCategory = oneCategory

//路由 / 所用组件
export const NextPage = nextPage
export const RoomBrief = roomBrief

//路由 /mySpace 所用组
export const Input = input
export const Candy = candy
export const OneList = oneList
export const Status = status