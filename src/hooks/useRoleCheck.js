import { useEffect, useState } from "react"

const useRoleCheck = email => {
    const [role, setRole] = useState(false);
    const [isRoleLoading, setIsRoleLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://woodpecker12-server-numangit.vercel.app/users/role/${email}`)
                .then(res => res.json())
                .then(data => {
                    setRole(data.role);
                    setIsRoleLoading(false);
                })
        }
    }, [email])
    return [role, isRoleLoading]
}

export default useRoleCheck;