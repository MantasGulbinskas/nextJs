import {Link} from "@chakra-ui/next-js";

const Navbar = () => {
    return(
        <>
        <Link href={'/'} color={'blue.400'}>Home</Link>
            <Link href={'/products'} color={'blue.400'}>Products</Link>
        </>
    )
}
export default Navbar;