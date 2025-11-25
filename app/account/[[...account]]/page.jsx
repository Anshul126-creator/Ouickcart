import { UserProfile } from '@clerk/nextjs'

export default function AccountPage() {
  return (
    <div className="flex items-center justify-center py-10 px-4">
      <UserProfile 
        appearance={{
          elements: {
            rootBox: "w-full max-w-4xl",
            card: "shadow-lg"
          }
        }}
      />
    </div>
  )
}
