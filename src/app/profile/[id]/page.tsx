export default function UserProfile({ params }: any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl">Profile</h1>
      <hr />
      <p className="text-2xl">Profile page of user {params.id}</p>
    </div>
  );
}
