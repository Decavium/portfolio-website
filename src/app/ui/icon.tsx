import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from '@fortawesome/free-brands-svg-icons';


export function TwitterIcon({ classes }: { classes?: string }) {
    return (
        <Link href="#" className={`icon brands ${classes}`}>
            <span className="label">Twitter</span>
            <FontAwesomeIcon icon={faTwitter}/>
        </Link>
    )
}