class User {
    constructor(roles) {
        this.roles = roles;
    }
    hasRole(role) {
        throw new Error("hasRole() method must be implemented.");
    }
}
class Maximized extends User {
    constructor(roles) {
        super(roles);
    }
    hasRole(role) {
            // Check if the user has the specified role using the maximized roles array
        return this.roles.includes(role);
    }
}

class Minimized extends User {
    constructor(roles) {
        super(roles);
    }
    hasRole(role) {
            // Check if the user has the specified role using the minimized roles array
        return !this.roles.includes(role);
    }
}
const userRoles = ["admin", "user", "manager"];
const maximizedUser = new Maximized(userRoles);
const minimizedUser = new Minimized(userRoles);

console.log(maximizedUser.hasRole("admin")); // true
console.log(maximizedUser.hasRole("guest")); // false

console.log(minimizedUser.hasRole("admin")); // false
console.log(minimizedUser.hasRole("guest")); // true
