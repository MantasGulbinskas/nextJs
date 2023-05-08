import {Link} from "@chakra-ui/next-js";

const Navbar = () => {
    return(
        <>
        <Link href={'/'} color={'blue.400'}>Home</Link>
            <Link href={'/airlines'} color={'blue.400'}>Airlines</Link>
        </>
    )
}
export default Navbar;