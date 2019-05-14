const requireHttps = (req, res, next) => {
	if (!req.secure) {
		res.redirect(301, `https://${req.hostname}${req.url}`);
	} else {
		next();
	}
};

module.exports = { requireHttps: requireHttps };