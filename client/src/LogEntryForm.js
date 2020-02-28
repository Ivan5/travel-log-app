import React from "react";

const LogEntryForm = () => {
  return (
    <div>
      <form className="entry-form">
        <label htmlFor="title">Title</label>
        <input name="title" type="text" required />
        <label htmlFor="comments">Comments</label>
        <textarea name="comments" rows={3}></textarea>
        <label htmlFor="description">Description</label>
        <textarea name="description" rows={3}></textarea>
        <label htmlFor="image">Image</label>
        <input name="image" type="text" />
        <label htmlFor="visitDate">Visit Date</label>
        <input name="visitDate" type="date" />
        <button>Create Log Entry</button>
      </form>
    </div>
  );
};

export default LogEntryForm;
