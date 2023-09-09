// User class to represent a user
class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}
  // UserRepository class to manage user data in the database
class UserRepository {
    constructor() {
        this.users = [
            new User('user1', 'password1'),
            new User('user2', 'password2'),
            ];
}
    getUserByUsername(username) {
        return this.users.find(user => user.username === username);
    }
}

  // AuthenticationService class responsible for authentication
class AuthenticationService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    authenticate(username, password) {
        const user = this.userRepository.getUserByUsername(username);
        if (!user) {
        return 'User not found';
        }
        if (user.password === password) {
            return 'Authentication successful';
        } else {
            return 'Authentication failed';
        }
    }
}

  // Example usage:
const userRepository = new UserRepository();
const authService = new AuthenticationService(userRepository);

console.log(authService.authenticate('user1', 'password1')); // Authentication successful
console.log(authService.authenticate('user1', 'wrongpassword')); // Authentication failed
console.log(authService.authenticate('nonexistentuser', 'password')); // User not found
