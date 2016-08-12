let _userProfile = null;
let profileName = '';
let initialized = false;

const save = () => {
    try {
        var str = JSON.stringify(_userProfile);
        window.localStorage.setItem(profileName, str);
    }
    catch(err) {
        window.console && console.error(err);
    }
};

const load = () => {
    try {
        var json = JSON.parse(window.localStorage.getItem(profileName));
        _userProfile = json;
    }
    catch(err) {
        window.console && console.error(err);
        _userProfile = null;
    }
};

export default {
    initialize: (username) => {
        if (initialized) {
            return;
        }

        profileName = 'spawn-prof-' + username;
        initialized = true;
        load();
    },

    reload: () => {
        load();
    },

    update: (userProfile) => {
        _userProfile = Object.assign(_userProfile || {}, userProfile);
        save();
    },

    delete: () => {
        window.localStorage.removeItem(profileName);
        profileName = '';
        _userProfile = null;
        initialized = false;
    },

    get: () => {
        if (!_userProfile) {
            return {};
        }

        return Object.assign({}, _userProfile);
    }
};
