import React, { useState } from "react";

const Contact = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("@gmail.com");
  const [userBio, setUserBio] = useState("About yourself");
  const [collection, setCollection] = useState([]);

  const sumbitInfo = (e) => {
    e.preventDefault();
    setCollection([...collection, { userName, userEmail, userBio }]);
    setUserName("");
    setUserEmail("@gmail.com");
    setUserBio("About yourself");
  };

  return (
    <div>
      <h1 className="font-bold text-4xl text-amber-950 text-center">
        This is the Student Form
      </h1>
      <section className=" m-12">
        <main>
          <form onSubmit={sumbitInfo} className="flex flex-col max-w-[500px]">
            <label className="font-bold text-3xl" htmlFor="">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            <label className="font-bold text-3xl" htmlFor="">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={userEmail}
              onChange={(e) => {
                setUserEmail(e.target.value);
              }}
            />
            <label className="font-bold text-3xl" htmlFor="">
              Bio
            </label>
            <textarea
              className="mb-3"
              placeholder="Enter your bio"
              value={userBio}
              onChange={(e) => {
                setUserBio(e.target.value);
              }}
            />
            <button
              className="bg-amber-950 text-amber-50 mb-4 block p-3.5 rounded-2xl"
              type="submit"
            >
              Sumbit
            </button>
          </form>
        </main>
        <main className="flex flex-wrap gap-4 ">
          {collection.map((data, i) => (
            <div
              className="bg-orange-950 text-amber-100 p-5 rounded-2xl"
              key={i}
            >
              <h1>
                <b>Name:{data.userName}</b>
              </h1>
              <h1>
                <i>
                  <b>Email:{data.userEmail} </b>
                </i>
              </h1>
              <p>
                <b>Bio:{data.userBio} </b>
              </p>
            </div>
          ))}
        </main>
      </section>
    </div>
  );
};

export default Contact;
