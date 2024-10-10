// Dynamically import all route modules using import.meta.glob
const routeModules = import.meta.glob('./*/routes.jsx');
async function loadModuleRoutes() {
    const routesPromises = Object.values(routeModules).map(async (moduleLoader) => {
        try {
            const module = await moduleLoader();
            return module.routes;
        } catch (error) {
            console.error('Failed to load routes:', error);
            return [];
        }
    });
    return Promise.all(routesPromises).then(routesArrays => routesArrays.flat());
}
export const getAllRoutes = async () => {
    const allRoutes = await loadModuleRoutes();
    console.log(allRoutes);
    return allRoutes;
};
