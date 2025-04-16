import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";
import { updateProfile } from "firebase/auth";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const Profile = () => {
  const { user } = useAuth();
  const [name, setName] = useState(user?.displayName || "");
  const [message, setMessage] = useState("");

  const handleUpdate = async () => {
    if (!user) return;
    try {
      await updateProfile(user, { displayName: name });
      setMessage("Profile updated!");
    } catch (error: any) {
      setMessage(error.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#11071F] px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <h2 className="text-2xl font-bold">Your Profile</h2>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-300">Email</label>
              <Input value={user?.email || ""} disabled className="bg-gray-700 text-white" />
            </div>
            <div>
              <label className="text-sm text-gray-300">Display Name</label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-[#2b1740] text-white"
              />
            </div>
            <Button onClick={handleUpdate} className="w-full bg-[--accent-color]">
              Update Profile
            </Button>
            {message && <p className="text-center text-sm text-green-400 mt-2">{message}</p>}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
