// description get all contacts
//route@ Get/api/contacts
//@access public

const getcontacts =  (req,res)=>{
    res.status(200).json({message:"Get all contacts"});
};

// description create all contacts
//route@ post/api/contacts
//@access public

const createcontact =  (req,res)=>{
    res.status(200).json({message:"Create all contacts"});
};

// description get all contacts
//route@ Get/api/contacts/:id
//@access public

const getcontact = (req,res)=>{
    res.status(200).json({message:`Get contact for ${req.params.id}`});
};

// description Update all contacts
//route@ Put/api/contacts/:id
//@access public

const updatecontact = (req,res)=>{
    res.status(200).json({message:`update contact for ${req.params.id}`});
};

// description delete all contacts
//route@ Delete/api/contacts/:id
//@access public

const deletecontact = (req,res)=>{
    res.status(200).json({message:`update contact for ${req.params.id}`});
};

module.exports= {getcontacts,
    getcontact,
    createcontact,
    updatecontact,
    deletecontact};
