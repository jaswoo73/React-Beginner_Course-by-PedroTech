import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

interface CreateFormData {
  title: string;
  description: string;
}

export const CreateForm = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const schema = yup.object().shape({
    title: yup.string().required("You must add a title"),
    description: yup
      .string()
      .required("You must add a description")
      .max(300, "Description must be at most 300 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateFormData>({ resolver: yupResolver(schema) });

  const postsRef = collection(db, "posts");

  const onCreatePost = async (data: CreateFormData) => {
    await addDoc(postsRef, {
      ...data,
      username: user?.displayName,
      userId: user?.uid,
    });
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit(onCreatePost)}>
      <input {...register("title")} placeholder="Title..." />
      {errors.title && <p style={{ color: "red" }}>{errors.title.message}</p>}
      <textarea {...register("description")} placeholder="Description..." />
      {errors.description && (
        <p style={{ color: "red" }}>{errors.description.message}</p>
      )}
      <input type="submit" className="submitForm-btn" />
    </form>
  );
};
