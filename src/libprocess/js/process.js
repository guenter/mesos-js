(function () {
  'use strict';

  var pid = require("./pid.js");

  // namespace process
  var process = process || {};

  // Definition of a static asset.
  process.Asset = function(path, types) {
    this.path = path;
    this.types = types;
  };

  // Static asset(s) to provide.
  process.assets = {};

  // Returns the IP address associated with this instance of the
  // library.
  process.ip = function() {
    return "127.0.0.1"; // TODO
  };

  // Returns the port associated with this instance of the library.
  process.port = function() {
    return 9000; // TODO
  };

  // class process.Process
  process.Process = function() {
    this.UPID = new pid.UPID(); // TODO

    // Process states.
    var state = Object.freeze({
      BOTTOM:      0,
      READY:       1,
      RUNNING:     2,
      BLOCKED:     3,
      TERMINATING: 4,
      TERMINATED:  5
    });

    this.self = function() { return this.UPID; };

    // Invoked when a process gets spawned.
    this.initialize = function() {};

    // Invoed when a process is terminated (unless visit
    // is overridden).
    this.finalize = function() {};

    // Invoked when a linked process has exited (see link).
    this.exited = function(pid) {};

    // Invoked when a linked process can no longer be monitored (see
    // link).
    this.lost = function(pid) {};

    // Puts a message at the front of the queue.
    this.inject = function(pid, name, data) {};

    // Sends a message with data to PID.
    this.send = function(pid, name, data) {};

    // Links with the specified PID. Linking with a process from
    // within the same "operating system process" is guaranteed to
    // give you perfect monitoring of that process. However, linking
    // with a process on another machine might result in receiving
    // lost callbacks due to the nature of a distributed environment.
    this.link = function(pid) {};

    // Set up a handler for a message.
    this.install = function(name, handler) {};

    // Delegate incoming messages with the specified name to PID.
    this.delegate = function(name) {};

    // Set up a handler for an HTTP request.
    this.route = function(name, help, handler) { return true; };

    // Provide the static asset(s) at the specified _absolute_ path
    // for the specified name. For example, assuming the process
    // named "server" invoked 'provide("name", "path")' then an HTTP
    // request for 'server/name' would return the asset found at
    // 'path'. If the specified path is a directory then an HTTP
    // request for 'server/name/file' would return the asset found at
    // '/path/file'. The 'Content-Type' header of the HTTP response
    // will be set to the specified type given the file extension
    // (you can manipulate this via the optional 'types' parameter).
    this.provide = function(name, path, types) {
      // TODO: Check that name is only alphanumeric (has no '/').
      // TODO: Check that path is absolute.
      var asset = new Asset();
      asset.path = path;
      asset.types = types;
      assets[name] = asset;
    };

  }; // class Process

  // Spawn a new process.
  //
  // @param process the process to be spawned
  // @param manage true if the process should be garbage collected
  process.spawn = function(process, manage) {};

  // Send a TERMINATE message to a process, injecting the message
  // ahead of all other messages queued up for that process if
  // requested. Note that currently terminate only works for local
  // processes (in the future we plan to make this more explicit via
  // the use of a PID instead of a UPID).
  //
  // @param inject if true message will be placed in the front of the
  //               message queue
  process.terminate = function(pid, inject) {
    // TODO: dispatch on the type of pid -- UPID or Process
  };

  // Wait for process to exit no mroe than specified seconds (returns
  // true if actually waited on a process).
  //
  // @param PID id of the process
  // @param secs max time to wait, 0 implies wait forever
  process.wait = function(pid, duration) {
    // TODO: dispatch on the type of pid -- UPID or Process
  };

  // Sends a message with data without a return address.
  //
  // @param to receiver
  // @param name message name
  // @param data data to send (gets copied)
  process.post = function(from, to, name, data) {};

  module.exports = process;

}());
