(function() {var implementors = {};
implementors["alloc"] = [];
implementors["memory"] = [];
implementors["paging"] = [];
implementors["sos_alloc"] = [];
implementors["sos_kernel"] = [];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()