import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home = () => (
  <div className={styles.container}>
    <main className={styles.main}></main>
    <div>
      <input
        type="text"
        placeholder="Search messages, listings, usernames"
        className="input input-bordered input-primary w-full max-w-xs"
      />

      <div className="dropdown">
        <label tabIndex={0} className="btn m-1 border-white">
          All Chats
          <svg
            class="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 bg-base-300 rounded-box w-52"
        >
          <li>
            <a href="#">Item 1</a>
          </li>
          <li>
            <a href="#">Item 2</a>
          </li>
        </ul>
      </div>

      <div className="drawer drawer-mobile ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-200 text-base-content">
            <li>
              <a>
                <div className="avatar online">
                  <div className="w-12 rounded-full">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
                Name (Company)
              </a>
            </li>

            <li>
              <a>
                <div className="avatar offline">
                  <div className="w-12 rounded-full">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
                Name (Company)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* <footer className={styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{" "}
        <span className={styles.logo}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </footer> */}
  </div>
);

export default Home;
