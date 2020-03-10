const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
    title: String,
    completed: Boolean
}, {
    timestamps: true
});

// mongodb document has PK of '_id', this is to enable virtual (id) field in JSON conversion
TodoSchema.set('toJSON', {
    virtuals: true,
    // versionKey:false,
    // transform: function (doc, ret) {   delete ret._id  }
});

module.exports = mongoose.model('Todo', TodoSchema);
