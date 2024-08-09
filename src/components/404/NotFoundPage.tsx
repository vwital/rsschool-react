import Link from "next/link";
import styles from "./style.module.css";

function NotFoundPage() {
  return (
    <div className={styles["page-404"]}>
      <h1>Page not found</h1>
      <button>
        <Link href="/">Go to the main page</Link>
      </button>
    </div>
  );
}

export default NotFoundPage;
