import React from "react";

export default function ProjectDetails(props: { index: number }) {
  return (
    <>
      {/* <!-- Project details--> */}
      <h2 className="text-uppercase">Project Name</h2>
      <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
      <img className="img-fluid d-block mx-auto" src={`./src/assets/img/portfolio/${props.index}.jpg`} alt="..." />
      <p>
        Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa
        incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum,
        reiciendis facere nemo!
      </p>
      <ul className="list-inline">
        <li>
          <strong>Client:</strong>
          Threads
        </li>
        <li>
          <strong>Category:</strong>
          Illustration
        </li>
      </ul>
      <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
        <i className="fas fa-xmark me-1"></i>
        Close Project
      </button>
    </>
  );
}
